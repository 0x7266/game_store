import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Post()
  createUser() {
    return this.usersService.createUser();
  }

  @Get()
  getUser() {
    // return this.usersService.getUser(email: string);
  }

  @Put()
  updateUser() {
    return this.usersService.updateUser();
  }

  @Delete()
  singup() {
    return this.usersService.deleteUser();
  }
}
