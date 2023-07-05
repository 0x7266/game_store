import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UpdateUserDto } from './dtos/update-user.dto';
import { CreateUserDto } from './dtos';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  createUser(body: CreateUserDto) {
    return this.usersRepository.createUser(body);
  }

  getUsers() {
    return this.usersRepository.getUsers();
  }

  getUser(email: string) {
    return this.usersRepository.getUser(email);
  }

  getUserById(id: number) {
    return this.usersRepository.getUserById(id);
  }

  updateUser(id: number, payload: UpdateUserDto) {
    return this.usersRepository.updateUser(id, payload);
  }

  deleteUser(id: number) {
    return this.usersRepository.deleteUser(id);
  }
}
