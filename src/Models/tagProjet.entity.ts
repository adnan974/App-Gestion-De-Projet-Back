import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,OneToMany, BaseEntity} from "typeorm";


@Entity("Tag_Projet")
export class Tag_Projet extends BaseEntity{

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