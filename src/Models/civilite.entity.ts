import {Entity,PrimaryGeneratedColumn,PrimaryColumn,OneToMany} from "typeorm";
import {Utilisateur} from "./utilisateur.entity"


@Entity("Civilite")
export class Civilite{

    @PrimaryGeneratedColumn()
    id:number;

    @PrimaryColumn()
    civilite:string;

    @OneToMany(()=>Utilisateur,(utilisateur:Utilisateur)=>utilisateur.civilite)
    utilisateurs: Array<Utilisateur>;
}