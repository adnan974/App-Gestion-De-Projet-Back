import { Controller, Get ,Post, Body} from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { UserService } from '../user/user.services';

@Controller("signin")
export class AuthentificationController {
  constructor(private readonly authentificatonService: AuthentificationService,private userService:UserService) {}

 

  @Post()
  signIn(
    @Body("username") username:string,
    @Body("password") password:string,
  ){
    // On verifie si le User existe
    this.userService.searchUserByUsername(username);
    // Si oui on récupère le password
    // On verifie si user et mdp match
  }
   


}
