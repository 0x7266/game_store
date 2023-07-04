import { Injectable } from '@nestjs/common';
import { GamesRepository } from './games.repository';
import { QueryDto } from './dtos/QueryDto';

@Injectable()
export class GamesService {
  constructor(private readonly gameRepository: GamesRepository) {}

  getGames() {
    return this.gameRepository.getGames();
  }

  getGameById(id: number) {
    return this.gameRepository.getGameById(id);
  }

  getGameByTitle(title: string) {
    return this.gameRepository.getGameByTitle(title);
  }

  getFilteredGames(query: QueryDto) {
    return this.gameRepository.getFilteredGames(query);
  }
}
