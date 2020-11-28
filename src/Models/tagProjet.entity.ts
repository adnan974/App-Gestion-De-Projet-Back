import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,OneToMany} from "typeorm";


@Entity("Tag_Projet")
export class Tag_Projet{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    libelle:string;

    @Column()
    couleurFond:string;

    @CreateDateColumn()
    creeLe:Date;

    @UpdateDateColumn()
    modifierLe:Date;

    
}