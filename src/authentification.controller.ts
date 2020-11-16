import { Controller, Get ,Post, Body} from '@nestjs/common';
import { AuthService } from './authentification.services';

@Controller("signUp")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getHello(): string {
    return this.authService.getHello();
  }

  @Post()
  signUp(
    @Body("civilite") civilite:string,
    @Body("firstname") firstname:string,
    @Body("lastname") lastname:string,
    @Body("username") username:string,
    @Body("email") email:string,
    @Body("password") password:string,
  ):any {
    this.authService.signUp({civilite,firstname,lastname,username,email,password});
  }
}
