import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createUser() {
    return this.usersRepository.createUser();
  }

  getUser(email: string) {
    return this.usersRepository.getUser(email);
  }

  getUserById(id: number) {
    return this.usersRepository.getUserById(id);
  }

  updateUser(id: number) {
    return this.usersRepository.updateUser();
  }

  deleteUser(id: number) {
    return this.usersRepository.deleteUser();
  }
}
