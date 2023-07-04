import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { GamesService } from '@modules/games/games.service';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  getGames() {
    return this.gamesService.getGames();
  }

  @Get(':id')
  getGameById(@Param('id', ParseIntPipe) id: number) {
    return this.gamesService.getGameById(id);
  }
}
