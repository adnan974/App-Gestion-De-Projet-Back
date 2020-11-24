import { Controller, Get ,Post, Body} from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { UserService } from '../user/user.services';

@Controller("signin")
export class AuthentificationController {
  constructor(private readonly authentificatonService: AuthentificationService,private userService:UserService) {}

 

  @Post()
  async signIn(
    @Body("username") username:string,
    @Body("password") password:string,
  ){
    // On verifie si le User existe
    let user = await this.userService.searchUserByUsername(username);

    // Si oui on récupère le password
    // On verifie si user et mdp match

    let isPasswordMatch = await this.authentificatonService.comparePassword(password,user.motDePasse);
    if(isPasswordMatch === true){
      return "ok"
    }
  }
   


}
