import { Controller, Get ,Post, Body, Res} from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { UserService } from '../user/user.services';
import {Response} from "express";

@Controller("signin")
export class AuthentificationController {
  constructor(private readonly authentificatonService: AuthentificationService,private userService:UserService) {}

 

  @Post()
  async signIn(
    @Res() res:Response,
    @Body("username") username:string,
    @Body("password") password:string,
  ){
    // On verifie si le User existe
    let user = await this.userService.searchUserByUsername(username);

    // Si oui on récupère le password
    // On verifie si user et mdp match
    if(user === undefined ){
      return res.status(401).send("Utilisateur non trouvé");
    }
    let isPasswordMatch = await this.authentificatonService.comparePassword(password,user.motDePasse);
    if(isPasswordMatch === true){
      return {
        acess_token: ""
      };
    }
    return res.status(401).send("utilisateur non trouvé");
  }
   


}
