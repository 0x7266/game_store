import { Controller, Get } from '@nestjs/common';

@Controller()
export class GamesController {
  @Get()
  getGames() {
    return 'games';
  }
}
