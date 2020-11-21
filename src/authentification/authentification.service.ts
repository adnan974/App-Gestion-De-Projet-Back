import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import {getConnection} from "typeorm";
import {Utilisateur} from "../models/utilisateur.entity"

const bcrypt = require('bcrypt');


@Injectable()
export class AuthentificationService {
  
    async hashPassword(password:string){
        await bcrypt
  .hash(password, 12)
  .then(hash => {
    console.log(`Hash: ${hash}`);
    return hash;
    // Store hash in your password DB.
  })
  .catch(err => console.error(err.message));
    }

    comparePassword(){

    }
}
