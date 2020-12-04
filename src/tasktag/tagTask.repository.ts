import { Tag_Tache } from "src/models/tagTache.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Tag_Tache)
export class TaskTagRepository extends Repository<Tag_Tache>{




}