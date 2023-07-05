import { PrismaService } from '@/shared';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  constructor(private prismaService: PrismaService) {}

  createUser() {}

  async getUser(email: string) {
    return await this.prismaService.user.findUnique({
      where: { email },
    });
  }

  updateUser() {}

  deleteUser() {}
}
