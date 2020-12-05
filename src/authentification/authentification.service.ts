import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.services';


@Injectable()
export class AuthentificationService {

  constructor(private userService: UserService, private jwtService: JwtService) { }

  async validateUser(username: string, password: string) {
    let user = await this.userService.searchUserByUsername(username);
    let isPasswordMatch = await this.userService.comparePassword(password, user.motDePasse);

    if (user && isPasswordMatch) {
      return user
      // // j'ai écrit ça comme ça generateJwt({user}) car sans les accolades, user n'est pas considéré comme un plain object
      // let jwt = await this.generateJwt({ user })
      // return ({
      //   acess_token: jwt
      // })
    }
  }
  // tag : jwt auth
  // Remarque : payload correspond aux informations qui seront stockées dans le jwt. ex. les infos d'un User
  async generateJwt(user: any) {
    const payload = { id: user.id, username: user.nomUtilisateur };
    const jwtToken = this.jwtService.sign(payload);
    return {
      access_token: jwtToken
    }
  }


}
