import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne, JoinTable, BaseEntity, OneToMany } from "typeorm";
import { Tag_Projet } from "./tagProjet.entity";
import { Etat_Projet } from "./etatProjet.entity";
import { Tache } from "./tache.entity";
import { Utilisateur } from "./utilisateur.entity";

@Entity("Projet")
export class Projet extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToOne(() => Utilisateur, (utilisateur: Utilisateur) => utilisateur.projetCree)
    utilisateurCreation: Utilisateur;

    @CreateDateColumn()
    creeLe: Date;

    @UpdateDateColumn()
    modifierLe: Date;

    @ManyToMany(() => Tag_Projet)
    @JoinTable()
    tagProjet: Tag_Projet[];

    @ManyToOne(() => Etat_Projet, (etat_projet: Etat_Projet) => etat_projet.projets)
    etatProjet: Etat_Projet;

    @OneToMany(() => Tache, (tache: Tache) => tache.projet)
    tache: Tache[];






}