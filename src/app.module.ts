import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthentificationModule } from './authentification/authentification.module';
import {DatabaseModule} from "./database/database.module";
import {UserModule} from "./user/user.module";
import { ProjectModule } from './project/project.module';


@Module({
  imports: [DatabaseModule,UserModule,AuthentificationModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
