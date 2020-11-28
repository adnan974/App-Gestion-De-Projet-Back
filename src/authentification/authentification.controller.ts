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

    // On verifie si user et mdp match
    if(user === undefined ){
      return res.status(401).send("Utilisateur non trouvé");
    }
    let isPasswordMatch = await this.authentificatonService.comparePassword(password,user.motDePasse);
    if(isPasswordMatch === true){

      // j'ai écrit ça comme ça generateJwt({user}) car sans les accolades, user n'est pas considéré comme un plain object
      let jwt = await this.authentificatonService.generateJwt({user})
      res.status(200).send({
          acess_token: jwt
      })
      
    }
    return res.status(401).send("utilisateur non trouvé");
  }
   


}
