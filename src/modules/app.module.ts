import { Module } from '@nestjs/common';
import { GamesModule } from '@modules/games';

@Module({
  imports: [GamesModule],
})
export class AppModule {}
