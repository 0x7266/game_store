import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { GamesService } from '@modules/games/games.service';
import { QueryDto } from './dtos/QueryDto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  getGames(@Query() query?: QueryDto) {
    if (!query) {
      return this.gamesService.getGames();
    }
    return this.gamesService.getFilteredGames(query);
  }

  @Get(':id')
  getGameById(@Param('id', ParseIntPipe) id: number) {
    return this.gamesService.getGameById(id);
  }
}
