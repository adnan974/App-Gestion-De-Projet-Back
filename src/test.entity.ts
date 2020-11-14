import {Entity,PrimaryGeneratedColumn,CreateDateColumn} from "typeorm";


@Entity("test")
export class Test{
    @PrimaryGeneratedColumn()
    id:Number;

    @CreateDateColumn({nullable:true})
    createdAt:Date;

    @CreateDateColumn({nullable:true})
    updatedAt:Date;

}