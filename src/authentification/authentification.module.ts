import { Module } from "@nestjs/common";
import { AuthentificationController } from "./authentification.controller";
import { AuthentificationService } from "./authentification.service";
import { PassportModule } from "@nestjs/passport";
import { UserModule } from "src/user/user.module";
import { LocalStrategy } from "./local.strategy";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { JwtStrategy } from "./jwt.strategy"
import { jwtConstants } from "./const";


@Module({

  imports: [UserModule, PassportModule,
    // tag : jwt auth
    // remarque: Il me semble que ces infos sont utile pour la génération du token. 
    // Voir dans le jwt.strategy, il y'a une autre secret key
    JwtModule.register({
      // AFAIRE: Utiliser une var d'environnement ICI
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1000000000000s' },
    }),],
  controllers: [AuthentificationController],
  providers: [AuthentificationService, LocalStrategy, JwtStrategy],
  exports: [AuthentificationService]
})
export class AuthentificationModule { }
