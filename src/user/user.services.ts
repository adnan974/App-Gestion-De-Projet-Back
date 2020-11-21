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

  signUp(user:{civilite:string,firstname:string,lastname:string,username:string,email:string,password:string}):any {
    console.log("Sign UP : "+user.civilite+" "+user.firstname+" "+user.lastname+" "+user.username+" "+user.email+" "+user.password);
     /*
     getConnection().createQueryBuilder()
    .insert()
    .into(Utilisateur)
    .values([
        { civilite:{id:1,civilite:user.civilite},nom:user.lastname, prenom:user.firstname,nomUtilisateur:user.username,motDePasse:user.password }
     ])
    .execute();
    */
     let hashPassword = this.authentificationService.hashPassword(user.password);
     console.log("hashpassword : "+hashPassword)
    Utilisateur.create({ civilite:{id:1,civilite:user.civilite},nom:user.lastname, prenom:user.firstname,nomUtilisateur:user.username,motDePasse:user.password }).save();
  }
}
