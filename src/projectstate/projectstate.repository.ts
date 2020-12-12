import { EntityRepository, Repository } from "typeorm";
import { Etat_Projet } from "../models/etatProjet.entity"

@EntityRepository(Etat_Projet)
export class ProjectStateRepository extends Repository<Etat_Projet>{

}