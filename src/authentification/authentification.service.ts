import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import {getConnection} from "typeorm";
import {Utilisateur} from "../models/utilisateur.entity"
//import {JwtService} from "@nestjs/jwt"

const bcrypt = require('bcrypt');


@Injectable()
export class AuthentificationService {

    constructor(){}

    // payload correspond aux informations qui seront stockées dans le jwt. ex. les infos d'un User
    generateJwt(payload:Object){
      
    }

    async hashPassword(password:string){
      const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt);
        console.log(hashPassword)
        return hashPassword;
    }

    async comparePassword(plainPassword,hash){
      return await bcrypt.compare(plainPassword,hash)
    }
}
