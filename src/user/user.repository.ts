import { Utilisateur } from "src/models/utilisateur.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Utilisateur)
export class UserRepository extends Repository<Utilisateur>{


    // A améliorer : je ne suis pas satisfait de la manière dont la requete est crée.
    async getProjectByUserId(userId) {
        let queryResult = await this
            .createQueryBuilder('utilisateur')
            .leftJoinAndSelect('utilisateur.projet', 'projet')
            .leftJoinAndSelect('projet.etatProjet', "etatprojet")
            .leftJoinAndSelect('projet.tagProjet', "tagprojet")
            .where('utilisateur.id = :id', { id: userId })
            .getOne();

        let userProject = queryResult.projet

        return userProject;

        /*
        this.createQueryBuilder("utilisateur").select("utilisateur.id").getMany();
        */


        /*
        this.createQueryBuilder("utilisateur")
    .leftJoinAndSelect("utilisateur.projet", "projet")
    .getMany();
         */
    }


    // A améliorer : je ne suis pas satisfait de la manière dont la requete est crée.
    async getTaskByUserId(userId) {
        let queryResult = await this
            .createQueryBuilder('utilisateur')
            .leftJoinAndSelect('utilisateur.tache', 'tache')
            .where('utilisateur.id = :id', { id: userId })
            .getOne();

        let userTask = queryResult.tache

        return userTask;
    }


}