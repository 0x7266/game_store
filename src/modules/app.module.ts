import { Module } from '@nestjs/common';
import { GamesModule } from '@modules/games';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '@modules/auth';
import { UsersModule } from './users';

@Module({
  imports: [ConfigModule.forRoot(), GamesModule, AuthModule, UsersModule],
})
export class AppModule {}
