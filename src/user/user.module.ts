import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthentificationModule } from 'src/authentification/authentification.module';
import { UserSignUpController } from "./user.signup.controller";
import { UserRepository } from './user.repository';
import { UserService } from './user.services';
import { UserProjectController } from './user.project.controller'
import { UserTaskController } from './user.task.controller';
import { ProjectRepository } from 'src/project/project.repository';




@Module({
  // forFeature: This module uses the forFeature() method to define which repositories
  // are registered in the current scope. 
  imports: [TypeOrmModule.forFeature([UserRepository, ProjectRepository])],
  controllers: [UserSignUpController, UserProjectController, UserTaskController],
  providers: [UserService],
  exports: [UserService]

})
export class UserModule { }
