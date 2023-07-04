import { Controller, Get } from '@nestjs/common';
import { GamesService } from '@modules/games/games.service';

@Controller()
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  getGames() {
    return 'games';
  }
}
