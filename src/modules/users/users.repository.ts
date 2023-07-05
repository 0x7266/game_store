import { PrismaService } from '@/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createUser() {}

  async getUser(email: string) {
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
