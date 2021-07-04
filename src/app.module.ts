import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthentificationModule } from './authentification/authentification.module';
import { UserModule } from "./user/user.module";
import { ProjectModule } from './project/project.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from "@nestjs/typeorm"
import { TaskModule } from './task/task.module';
import { TasktagModule } from './tasktag/tasktag.module';
import { ProjectTagModule } from './projecttag/projecttag.module';
import { ProjectstateModule } from './projectstate/projectstate.module';
import { GenderModule } from './gender/gender.module';



@Module({
  imports: [

    // permet d'utiliser le fichier d'environnement du projet (voir doc dotenv avec nest)
    ConfigModule.forRoot({
      isGlobal: true
    }),

    TypeOrmModule.forRoot({
      type: "postgres",
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      ssl:true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        },
      },
      synchronize: true,
      entities: ["dist/**/*.entity{.ts,.js}"]
    }),

    UserModule,
    AuthentificationModule,
    ProjectModule,
    TaskModule,
    TasktagModule,
    ProjectTagModule,
    ProjectstateModule,
    GenderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
