import { Module } from '@nestjs/common';
import {UserController} from "./user.controller";
import {UserService} from "./user.services";
import {AuthentificationService} from "../authentification/authentification.service"



@Module({
  controllers: [UserController],
  providers: [UserService,AuthentificationService],
})
export class UserModule {}
