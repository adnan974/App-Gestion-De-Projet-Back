import { Module } from "@nestjs/common";
import {AuthentificationController} from "./authentification.controller";
import {AuthentificationService} from "./authentification.service";
import {UserService} from "../user/user.services"

@Module({
  controllers: [AuthentificationController],
  providers: [AuthentificationService,UserService],
})
export class AuthentificationModule {}
