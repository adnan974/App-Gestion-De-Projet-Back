import { Injectable } from '@nestjs/common';
import { AuthentificationService } from 'src/authentification/authentification.service';
import {getConnection} from "typeorm";
import {Utilisateur} from "../models/utilisateur.entity";


@Injectable()
export class UserService {
  constructor(private authentificationService:AuthentificationService){

  }



  getHello(): string {
    return 'authenfication module';
  }

  async signUp(user:{civilite:string,firstname:string,lastname:string,username:string,email:string,password:string}) {
     
     let hashPassword = await this.authentificationService.hashPassword(user.password);
     //console.log(hashPassword);
     Utilisateur.create({ civilite:{id:1,civilite:user.civilite},nom:user.lastname, prenom:user.firstname,nomUtilisateur:user.username,motDePasse:hashPassword }).save();
  }

  async searchUserByUsername(username:string){
    let anUser;
    anUser = await Utilisateur.findOne({nomUtilisateur:username});
    return anUser;
    
  }
}
