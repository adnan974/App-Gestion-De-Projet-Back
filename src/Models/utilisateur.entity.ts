import {Entity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,Column,ManyToOne} from "typeorm";
import {Civilite} from "./civilite.entity"

@Entity("User")
export class Utilisateur{
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToOne(()=>Civilite,(civilite:Civilite)=>civilite.utilisateurs)
    civilite: Civilite;

    @Column()
    nom:string;

    @Column()
    prenom:string;

    @Column()
    login:string;

    @Column()
    motDePasse:string;

    @CreateDateColumn()
    creeLe:Date;

    @UpdateDateColumn()
    modifierLe:Date;
}