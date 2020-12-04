import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';
import { UserService } from '../user/user.services';
import { Response } from "express";
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags("signin")
@Controller("signin")
export class AuthentificationController {
  constructor(private readonly authentificatonService: AuthentificationService) { }



  @Post()
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
  ) {

    return this.authentificatonService.validateUser(username, password)

  }



}
