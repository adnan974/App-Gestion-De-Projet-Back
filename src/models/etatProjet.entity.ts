import {Entity,PrimaryGeneratedColumn,Column,OneToMany} from "typeorm";
import {Projet} from "./projet.entity";

@Entity("Etat_Projet")
export class Etat_Projet{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    libelle:string;

    @OneToMany(()=>Projet,(projet:Projet)=>projet.etatProjet)
    projets: Projet[];

}