import { Module } from '@nestjs/common';
import { AuthentificationModule } from 'src/authentification/authentification.module';
import {UserController} from "./user.controller";
import { UserService } from './user.services';



@Module({
  imports:[AuthentificationModule],
  controllers: [UserController],
  providers: [UserService],
 
})
export class UserModule {}
