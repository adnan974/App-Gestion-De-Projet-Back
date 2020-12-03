import { Etat_Projet } from "src/models/etatProjet.entity";
import { Tag_Projet } from "src/models/tagProjet.entity";
import { Utilisateur } from "src/models/utilisateur.entity";

export class CreateProjectDto {

    description: string;
    utilisateurCreation: Utilisateur;
    tagProjet: Tag_Projet[];
    etatProjet: Etat_Projet;

}