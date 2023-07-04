import { data } from '@/data';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GamesService {
  getGames() {
    return data;
  }
}
