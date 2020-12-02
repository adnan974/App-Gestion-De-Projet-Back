import { Controller, Get ,Post, Body, Param} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.services';

@ApiTags("signup")
@Controller("signup")
export class UserSignUpController {
  constructor(private readonly userService: UserService) {}



  // A FAIRE: faire un @Body user:User au lieu de réucp les paramètres un par un. 
  // Voir les DTO
  
  // Récupère les infos du user issu du formulaire d'inscription. 
  @Post()
  @ApiOperation({
    summary:"Add an user to the DataBase"
  })
  signUp(
    @Body("user") user
    /*
    @Body("civilite") civilite:string,
    @Body("firstname") firstname:string,
    @Body("lastname") lastname:string,
    @Body("username") username:string,
    @Body("email") email:string,
    @Body("password") password:string,
    */
  ):any {
    // on demande à un service de crée le user
    //this.userService.signUp({civilite,firstname,lastname,username,email,password});

    this.userService.signUp(user);
  }

  @Get(":id")
  getProjetByUser(@Param() param){
    return this.userService.getAnUserProjects(param.id);
  }

}
