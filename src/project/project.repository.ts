import { Projet } from "src/models/projet.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Projet)
export class ProjectRepository extends Repository<Projet>{




}