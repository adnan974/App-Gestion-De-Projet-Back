import { Controller, Get ,Post, Body} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.services';

@ApiTags("signup")
@Controller("signup")
export class UserController {
  constructor(private readonly userService: UserService) {}


  // Récupère les infos du user issu du formulaire d'inscription. 
  @Post()
  @ApiOperation({
    summary:"Add an user to the DataBase"
  })
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
