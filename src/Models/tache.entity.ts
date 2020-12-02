import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,ManyToMany, ManyToOne,JoinTable, BaseEntity} from "typeorm";
import { Projet } from "./projet.entity";
import {Tag_Tache} from "./tagTache.entity";
import { Utilisateur } from "./utilisateur.entity";

@Entity("Tache")
export class Tache extends BaseEntity{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    libelle:string;

    @Column()
    description:string;

    @ManyToMany(()=>Tag_Tache)
    @JoinTable()
    tagProjet:Tag_Tache[];

    @ManyToOne(()=>Projet,(projet:Projet)=>projet.tache)
    projet:Projet;

    

    @CreateDateColumn()
    creeLe:Date;

    @UpdateDateColumn()
    modifierLe:Date;

    

    






}