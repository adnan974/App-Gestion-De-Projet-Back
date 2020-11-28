import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,ManyToMany, ManyToOne,JoinTable, BaseEntity} from "typeorm";
import {Tag_Projet} from "./tagProjet.entity";
import {Etat_Projet} from "./etatProjet.entity";

@Entity("Projet")
export class Projet extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    description:string;

    @CreateDateColumn()
    creeLe:Date;

    @UpdateDateColumn()
    modifierLe:Date;

    @ManyToMany(()=>Tag_Projet)
    @JoinTable()
    tagProjet:Tag_Projet[];

    @ManyToOne(()=>Etat_Projet,(etat_projet:Etat_Projet)=>etat_projet.projets)
    etatProjet:Etat_Projet;






}