import { ApiProperty } from '@nestjs/swagger';
import { Game } from '@prisma/client';

export class GameEntity implements Game {
  constructor(partial: Partial<GameEntity>) {
    Object.assign(this, partial);
  }
  @ApiProperty()
  id: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  thumbnail: string;
  @ApiProperty()
  short_description: string;
  @ApiProperty()
  game_url: string;
  @ApiProperty()
  genre: string;
  @ApiProperty()
  platform: string;
  @ApiProperty()
  publisher: string;
  @ApiProperty()
  developer: string;
  @ApiProperty()
  release_date: string;
  @ApiProperty()
  freetogame_profile_url: string;
}
