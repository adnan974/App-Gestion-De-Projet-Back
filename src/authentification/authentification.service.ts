import { Injectable } from '@nestjs/common';

import { JwtService } from "@nestjs/jwt"
import { UserService } from 'src/user/user.services';


@Injectable()
export class AuthentificationService {

  constructor(private jwtService: JwtService, private userService: UserService) { }

  async validateUser(username: string, password: string) {
    let user = await this.userService.searchUserByUsername(username);
    let isPasswordMatch = await this.userService.comparePassword(password, user.motDePasse);

    if (user && isPasswordMatch) {
      // j'ai écrit ça comme ça generateJwt({user}) car sans les accolades, user n'est pas considéré comme un plain object
      let jwt = await this.generateJwt({ user })
      return ({
        acess_token: jwt
      })
    }
  }

  // Remarque : payload correspond aux informations qui seront stockées dans le jwt. ex. les infos d'un User
  async generateJwt(payload: Object) {
    const jwt = await this.jwtService.sign(payload);
    return jwt;
  }


}
