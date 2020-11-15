import { Controller, Get } from '@nestjs/common';
import { AuthService } from './authentification.services';

@Controller("test")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }
}
