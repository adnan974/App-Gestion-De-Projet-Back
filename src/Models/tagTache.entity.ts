import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,OneToMany, BaseEntity} from "typeorm";


@Entity("Tag_Tache")
export class Tag_Tache extends BaseEntity{

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