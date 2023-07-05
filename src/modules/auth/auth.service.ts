import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entities';
import { UsersService } from '@modules/users';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string): Promise<AuthEntity> {
    // Step 1: Fetch a user with the given username
    const user = await this.userService.getUser(username);

    // If no user is found, throw an error
    if (!user) {
      throw new NotFoundException(`No user found`);
    }

    // Step 2: Check if the password is correct
    const isPasswordValid = bcrypt.compare(password, user.password);

    // If password does not match, throw an error
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    // Step 3: Generate a JWT containing the user's ID and return it
    return {
      accessToken: this.jwtService.sign({ userId: user.id }),
    };
  }
}
