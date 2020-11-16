import {Entity,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,Column,ManyToOne,BaseEntity} from "typeorm";
import {Civilite} from "./civilite.entity"

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

    @CreateDateColumn()
    creeLe:Date;

    @UpdateDateColumn()
    modifierLe:Date;
}