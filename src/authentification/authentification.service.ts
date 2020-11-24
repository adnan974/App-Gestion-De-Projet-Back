import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import {getConnection} from "typeorm";
import {Utilisateur} from "../models/utilisateur.entity"

const bcrypt = require('bcrypt');


@Injectable()
export class AuthentificationService {
  
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
