import { Module } from "@nestjs/common";
import { AuthentificationController } from "./authentification.controller";
import { AuthentificationService } from "./authentification.service";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/user/user.module";
import { UserService } from "src/user/user.services";


@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: "jwt"
    }),
    JwtModule.register({
      secret: "test"
    }),

    UserModule

  ],
  controllers: [AuthentificationController],
  providers: [AuthentificationService],
  exports: [AuthentificationService]
})
export class AuthentificationModule { }
