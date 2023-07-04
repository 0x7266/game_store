import { PrismaService } from '@/data/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class GamesService {
  constructor(private readonly prismaService: PrismaService) {}

  getGames() {
    return this.prismaService.game.findMany() || [];
  }

  async getGameById(id: number) {
    const game = await this.prismaService.game.findUnique({
      where: {
        id,
      },
    });
    if (!game) {
      throw new HttpException('Game not found', HttpStatus.BAD_REQUEST);
    }
    return game;
  }
}
