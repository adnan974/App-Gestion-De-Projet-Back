import { Civilite } from "src/models/civilite.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Civilite)
export class GenderRepository extends Repository<Civilite>{ }