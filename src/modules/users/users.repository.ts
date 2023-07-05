import { PrismaService } from '@/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createUser() {}

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

  updateUser() {}

  deleteUser() {}
}
