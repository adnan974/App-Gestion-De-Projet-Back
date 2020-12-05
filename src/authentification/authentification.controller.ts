import { Controller, Get, Post, Body, Res, UseGuards, Req, Request } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { UserService } from '../user/user.services';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-authentification.guard';
import { JwtAuthGuard } from './jwt-authentification.guard';

@ApiTags("signin")
@Controller("signin")
export class AuthentificationController {
  constructor(private readonly authentificatonService: AuthentificationService) { }


  @Post()
  // Remarque : Equivalent d'un middleware. La fonction validate définie dans local.strategy sera 
  //            automatiquement appelée
  @UseGuards(LocalAuthGuard)
  @ApiOperation({
    summary: "handle the login of a user"
  })
  @ApiParam({
    name: "username",
    required: true,
    type: String,
    example: "adn974"

  })
  @ApiParam({
    name: "password",
    required: true,
    type: String,
    example: "A&éçZ_YzuzNuuzUZDu$^ùé^éà"

  })
  async signIn(
    @Body("username") username: string,
    @Body("password") password: string,
    @Request() req
  ) {
    return this.authentificatonService.generateJwt(req.user);


  }

  // tag : jwt auth
  // Remarque : Ce useGuard va utiliser la classe jwt-strategy
  //            (la classe JWTGuard a pour fonction de définir la strategy donc quelle classe utiliser).
  //            A chaque requete vers cette route,
  //            grâce au jwt strategy, le tocken dans le header sera analyser. Si il est valide, la methode 
  //            validate() de la classe sera exécutée
  @UseGuards(JwtAuthGuard)
  @Get("/test-auth")
  test(@Request() req) {
    return req.user;
  }



}
