import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthentificationModule } from './authentification/authentification.module';
import {UserModule} from "./user/user.module";
import { ProjectModule } from './project/project.module';
import { ConfigModule } from '@nestjs/config';
import {TypeOrmModule} from "@nestjs/typeorm"




@Module({
  imports: [
  
  // permet d'utiliser le fichier d'environnement du projet (voir doc dotenv avec nest)
  ConfigModule.forRoot({
    isGlobal:true
  }),

  TypeOrmModule.forRoot({
    type:"postgres",
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    port:parseInt(process.env.DB_PORT),
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    synchronize:true,
    entities:["dist/**/*.entity{.ts,.js}"]
  }),

  UserModule,
  AuthentificationModule,
  ProjectModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
