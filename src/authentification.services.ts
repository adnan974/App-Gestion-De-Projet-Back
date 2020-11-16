import { Injectable } from '@nestjs/common';
import {getConnection} from "typeorm";
import {Utilisateur} from "./Models/utilisateur.entity"

@Injectable()
export class AuthService {
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

    Utilisateur.create({ civilite:{id:1,civilite:user.civilite},nom:user.lastname, prenom:user.firstname,nomUtilisateur:user.username,motDePasse:user.password }).save();
  }
}
