import { Controller, Get ,Post, Body} from '@nestjs/common';
import { UserService } from './user.services';

@Controller("signup")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }

  // Récupère les infos du user issu du formulaire d'inscription. 
  @Post()
  signUp(
    @Body("civilite") civilite:string,
    @Body("firstname") firstname:string,
    @Body("lastname") lastname:string,
    @Body("username") username:string,
    @Body("email") email:string,
    @Body("password") password:string,
  ):any {
    // on demande à un service de crée le user
    this.userService.signUp({civilite,firstname,lastname,username,email,password});
  }
}
