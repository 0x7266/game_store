import { Module } from '@nestjs/common';
import { GamesController } from '@modules/games/games.controller';
import { GamesService } from '@modules/games/games.service';
import { PrismaService } from '@/data/prisma.service';

@Module({
  controllers: [GamesController],
  providers: [GamesService, PrismaService],
})
export class GamesModule {}
