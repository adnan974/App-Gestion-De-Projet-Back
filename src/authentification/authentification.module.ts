import { Module } from "@nestjs/common";
import {AuthentificationController} from "./authentification.controller";
import {AuthentificationService} from "./authentification.service";
import {UserService} from "../user/user.services";
import { JwtService } from "@nestjs/jwt";
//import {JwtModule} from "@nestjs/jwt";

@Module({
 /* imports:[
    JwtModule.registerAsync({

    })
  ], */
  controllers: [AuthentificationController],
  providers: [AuthentificationService,UserService],
})
export class AuthentificationModule {}
