import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, ManyToOne, JoinTable, BaseEntity } from "typeorm";
import { Projet } from "./projet.entity";
import { Tag_Tache } from "./tagTache.entity";
import { Utilisateur } from "./utilisateur.entity";

@Entity("Tache")
export class Tache extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    libelle: string;

    @Column()
    description: string;

    @ManyToMany(() => Tag_Tache)
    @JoinTable()
    tagTache: Tag_Tache[];

    @ManyToOne(() => Projet, (projet: Projet) => projet.tache, {
        // Cette ligne signifie, que lorsque je supprime un enregistrement de projet, 
        // Alors je vais aussi supprimer toutes les tâches qui on pour clé entrangère le projet que j'ai supprimé
        onDelete: "CASCADE"
    })
    projet: Projet;



    @CreateDateColumn()
    creeLe: Date;

    @UpdateDateColumn()
    modifierLe: Date;










}