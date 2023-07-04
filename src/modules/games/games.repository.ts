import { NotFoundException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '@/data';
import { QueryDto } from './dtos/QueryDto';

@Injectable()
export class GamesRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async getGames() {
    return await this.prismaService.game.findMany();
  }

  async getGameById(id: number) {
    const game = await this.prismaService.game.findUnique({
      where: {
        id,
      },
    });
    if (!game) {
      throw new NotFoundException('Game not found');
    }
    return game;
  }

  async getFilteredGames(query: QueryDto) {
    const games = await this.prismaService.game.findMany({
      where: {
        genre: {
          equals: query.genre,
          mode: 'insensitive',
        },
      },
    });
    return games;
  }
}
