import { NotFoundException, Injectable } from '@nestjs/common';
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
        ...(query.genre
          ? { genre: { equals: query.genre, mode: 'insensitive' } }
          : {}),
        ...(query.publisher
          ? { publisher: { equals: query.publisher, mode: 'insensitive' } }
          : {}),
        ...(query.platform
          ? {
              platform: {
                equals:
                  query.platform.toLowerCase() === 'pc'
                    ? 'pc (windows)'
                    : query.platform,
                mode: 'insensitive',
              },
            }
          : {}),
        ...(query.year
          ? { release_date: { contains: query.year.slice(0, 4) } }
          : {}),
      },
    });
    if (!games) {
      throw new NotFoundException('Games not found');
    }
    return games;
  }
}
