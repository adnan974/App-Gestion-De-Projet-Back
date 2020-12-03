import { Projet } from "src/models/projet.entity";
import { Tag_Tache } from "src/models/tagTache.entity";

export class CreateTaskDto {
    id: number;
    libelle: string;
    description: string;
    tagTache: Tag_Tache[];
    projet: Projet;




}