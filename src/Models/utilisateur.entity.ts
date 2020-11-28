import {Entity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,Column,ManyToOne,BaseEntity, ManyToMany, JoinTable} from "typeorm";
import {Civilite} from "./civilite.entity"
import { Projet } from "./projet.entity";

@Entity("Utilisateur")
export class Utilisateur extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>Civilite,(civilite:Civilite)=>civilite.utilisateurs)
    civilite: Civilite;

    @Column()
    nom:string;

    @Column()
    prenom:string;

    @Column()
    nomUtilisateur:string;

    @Column()
    motDePasse:string;

    @ManyToMany(()=>Projet)
    @JoinTable()
    projet:Projet[];

    @CreateDateColumn()
    creeLe:Date;

    @UpdateDateColumn()
    modifierLe:Date;
}