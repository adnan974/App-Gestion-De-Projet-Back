import { Module } from '@nestjs/common';
import {AuthController} from "./authentification.controller";
import {AuthService} from "./authentification.services";



@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
