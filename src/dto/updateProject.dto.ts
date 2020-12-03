import { Etat_Projet } from "src/models/etatProjet.entity";

export class UpdateProjectDto {
    id: number
    description: string;
    etatProjet: Etat_Projet;

}