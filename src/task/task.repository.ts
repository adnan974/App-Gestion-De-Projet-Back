import { Tache } from "src/models/tache.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Tache)
export class TaskRepository extends Repository<Tache>{
    



}