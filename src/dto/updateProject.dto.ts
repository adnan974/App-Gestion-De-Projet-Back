import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { Etat_Projet } from "src/models/etatProjet.entity";
import { Tag_Projet } from "src/models/tagProjet.entity";

export class UpdateProjectDto {

    @IsInt()
    @IsNotEmpty()
    id: number

    @IsString()
    description: string;

    @IsString()
    titre: string;

    etatProjet: Etat_Projet;

    tagProjet: Tag_Projet;

}