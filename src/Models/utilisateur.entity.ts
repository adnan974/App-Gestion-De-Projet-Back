import {Entity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,Column,ManyToOne,BaseEntity, ManyToMany, JoinTable, OneToMany} from "typeorm";
import {Civilite} from "./civilite.entity"
import { Projet } from "./projet.entity";
import { Tache } from "./tache.entity";

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

    @OneToMany(()=>Projet,(projet:Projet)=>projet.utilisateurCreation)
    projetCree:Projet[];

    @ManyToMany(()=>Projet)
    @JoinTable()
    projet:Projet[];

    @ManyToMany(()=>Tache)
    @JoinTable()
    tache:Tache[];

    @CreateDateColumn()
    creeLe:Date;

    @UpdateDateColumn()
    modifierLe:Date;
}