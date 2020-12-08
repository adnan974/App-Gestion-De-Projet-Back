import { IsNotEmpty, IsString } from "class-validator";
import { Etat_Projet } from "src/models/etatProjet.entity";
import { Tag_Projet } from "src/models/tagProjet.entity";
import { Utilisateur } from "src/models/utilisateur.entity";

export class CreateProjectDto {

    @IsString()
    description: string;

    @IsString()
    titre: string;

    @IsNotEmpty()
    utilisateurCreation: Utilisateur;

    // A FAIRE : vilidador sur des objects, comment faire ?
    tagProjet: Tag_Projet[];

    etatProjet: Etat_Projet;

}