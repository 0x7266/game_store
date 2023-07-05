import { Module } from '@nestjs/common';
import { GamesController } from '@modules/games/games.controller';
import { GamesService } from '@modules/games/games.service';
import { GamesRepository } from '@modules/games/games.repository';
import { PrismaService } from '@/shared';

@Module({
  controllers: [GamesController],
  providers: [GamesService, GamesRepository, PrismaService],
})
export class GamesModule {}
