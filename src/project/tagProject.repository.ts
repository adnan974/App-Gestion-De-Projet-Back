import { Tag_Projet } from "src/models/tagProjet.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Tag_Projet)
export class ProjectTagRepository extends Repository<Tag_Projet>{




}