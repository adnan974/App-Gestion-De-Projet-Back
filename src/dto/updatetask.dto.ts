import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { Projet } from "src/models/projet.entity";
import { Tag_Tache } from "src/models/tagTache.entity";

export class UpdateTaskDto {

    @IsNotEmpty()
    @IsInt()
    id: number;

    @IsString()
    libelle: string;

    @IsString()
    description: string;





}