import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthentificationModule } from 'src/authentification/authentification.module';
import {UserSignUpController} from "./user.signup.controller";
import { UserRepository } from './user.repository';
import { UserService } from './user.services';
import {UserProjectController} from './user.project.controller'
import { UserTaskController } from './user.task.controller';




@Module({
  // forFeature: This module uses the forFeature() method to define which repositories
  // are registered in the current scope. 
  imports:[TypeOrmModule.forFeature([UserRepository]),AuthentificationModule],
  controllers: [UserSignUpController,UserProjectController,UserTaskController],
  providers: [UserService],
 
})
export class UserModule {}
