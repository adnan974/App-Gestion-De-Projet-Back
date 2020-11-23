import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
    type:"postgres",
    username:"postgres",
    password:"admin",
    port:5432,
    host:"localhost",
    database:"app-gestion-projet",
    synchronize:true,
    entities:["dist/**/*.entity{.ts,.js}"]

}