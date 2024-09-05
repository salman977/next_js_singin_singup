import { Controller, Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserService } from '../user/user.service'; // Corrected import

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UserService, // Inject UserService in constructor
  ) {}

  @Post('login')
  async login(@Request() req) {
    console.log(req.body);
    return this.authService.login(req.body);
  }

  @Post('register')
  async register(@Body() body: { username: string; password: string }) {
    return this.userService.createUser(body.username, body.password); // Use 'this' to access userService
  }
}
