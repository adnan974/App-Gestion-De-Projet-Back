import { IsInt, IsNotEmpty, IsString } from "class-validator";
import { Etat_Projet } from "src/models/etatProjet.entity";

export class UpdateProjectDto {

    @IsInt()
    @IsNotEmpty()
    id: number

    @IsString()
    description: string;

    etatProjet: Etat_Projet;

}