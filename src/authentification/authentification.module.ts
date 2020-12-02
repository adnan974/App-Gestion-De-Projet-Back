import { Module } from "@nestjs/common";
import { AuthentificationController } from "./authentification.controller";
import { AuthentificationService } from "./authentification.service";
import { UserService } from "../user/user.services";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserRepository } from "src/user/user.repository";
import { ProjectRepository } from "src/project/project.repository";

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: "jwt"
    }),
    JwtModule.register({
      secret: "test"
    }),

  ],
  controllers: [AuthentificationController],
  providers: [AuthentificationService, UserService, UserRepository, ProjectRepository],
  exports: [AuthentificationService]
})
export class AuthentificationModule { }
