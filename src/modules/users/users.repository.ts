import { PrismaService } from '@/shared';
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async createUser(user: CreateUserDto) {
    const hashed = await bcrypt.hash(user.password, 10);
    user.password = hashed;
    return await this.prismaService.user.create({ data: user });
  }

  async getUsers() {
    return await this.prismaService.user.findMany();
  }

  async getUser(username: string) {
    return await this.prismaService.user.findUnique({
      where: { username },
    });
  }

  async getUserByEmail(email: string) {
    return await this.prismaService.user.findUnique({
      where: { email },
    });
  }

  async getUserById(id: number) {
    return await this.prismaService.user.findUnique({ where: { id } });
  }

  async updateUser(id: number, payload: UpdateUserDto) {
    if (payload.password) {
      payload.password = await bcrypt.hash(payload.password, 10);
    }
    return this.prismaService.user.update({
      where: { id },
      data: payload,
    });
  }

  async deleteUser(id: number) {
    return await this.prismaService.user.delete({ where: { id } });
  }
}
