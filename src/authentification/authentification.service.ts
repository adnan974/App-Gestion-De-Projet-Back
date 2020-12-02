import { Injectable } from '@nestjs/common';

import {JwtService} from "@nestjs/jwt"

const bcrypt = require('bcrypt');


@Injectable()
export class AuthentificationService {

    constructor(private jwtService:JwtService){}

    // payload correspond aux informations qui seront stockées dans le jwt. ex. les infos d'un User
    async generateJwt(payload:Object){
      const jwt = await this.jwtService.sign(payload);
      return jwt;
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
