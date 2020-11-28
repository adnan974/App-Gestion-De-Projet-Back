import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
    type:"postgres",
    username:"postgres",
    password:"goulamaly",
    port:5432,
    host:"localhost",
    database:"app-gestion-projet",
    synchronize:true,
    entities:["dist/**/*.entity{.ts,.js}"]

}