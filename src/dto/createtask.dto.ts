import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { Projet } from "src/models/projet.entity";
import { Tag_Tache } from "src/models/tagTache.entity";

export class CreateTaskDto {

    id: number;

    @IsString()
    @IsNotEmpty()
    libelle: string;

    @IsString()
    description: string;

    tagTache: Tag_Tache[];

    projet: Projet;




}