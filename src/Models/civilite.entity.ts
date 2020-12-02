import {Entity,PrimaryGeneratedColumn,PrimaryColumn,OneToMany, Column} from "typeorm";
import {Utilisateur} from "./utilisateur.entity"


@Entity("Civilite")
export class Civilite{

    @PrimaryGeneratedColumn()
    id:number;

    // = Colonne en tant que clé primaire
    @Column()
    civilite:string;

    @OneToMany(()=>Utilisateur,(utilisateur:Utilisateur)=>utilisateur.civilite)
    utilisateurs: Utilisateur[];
}