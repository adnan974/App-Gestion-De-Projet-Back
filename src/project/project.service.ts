import { Injectable } from '@nestjs/common';
import { Tag_Tache } from 'src/models/tagTache.entity';
import { getManager } from 'typeorm';
import { Projet } from '../models/projet.entity';
import { ProjectRepository } from './project.repository';
import { ProjectTagRepository } from './tagProject.repository';


@Injectable()
export class ProjectService {

    constructor(private projectRepository: ProjectRepository, private projectTagRepository: ProjectTagRepository) {

    }

    getAllProjects() {
        let projectsData = this.projectRepository.find();
        return projectsData;
    }

    // PROBLEME rencontré : J'ai eu un pb dans cette méthode
    // contexte du pb: Cette méthode crée un projet. Il ajoute aussi les tags du projet. Or, la table Tag_projet
    //     et Projet on une relation many-to-many. Ce qui veut dire que lorsque j'ajoute des tag au projet,
    //     il doit aussi créer une ligne dans la table d'association des deux. 

    // code qui me posait pb :  Je ne pouvais pas ajouter les tag directement lors de la creation

    //      let createdProject = await this.projectRepository.create({
    //        description:project.description,
    //        utilisateurCreation:project.utilisateurCreation,
    //        etatProjet:project.etatProjet,
    //        tagProjet:project.tagProjet
    //        }).save()

    // Solution : J'ai créer le projet, puis je cherché le tag avec son id et j'ai ajouté le tag dans le projet
    //  voir code ci dessous

    async createProject(project) {


        let createdProject = await this.projectRepository.create({
            description: project.description,
            utilisateurCreation: project.utilisateurCreation,
            etatProjet: project.etatProjet,
            //tagProjet:project.tagProjet
        }).save()

        // A FAIRE: que faire si les tag projet ne sont pas renseignés
        // A FAIRE : Actuellement ce code focntion que si il y'a 1 tag dans une tache. Trouver aussi comment faire 
        // Dans le cas ou il y'ne a plusieurs
        let projectTag = await this.projectTagRepository.findOne(project.tagProjet.id)
        console.log(projectTag)

        createdProject.tagProjet = [projectTag]
        this.projectRepository.save(createdProject)
    }


    deleteProject(projectId) {
        this.projectRepository.delete(projectId)
    }

    // A FAIRE: pour l'instant j'update que le libelle et l'état. Je vais aussi devoir modifier 
    // les tags et les taches associés
    async updateProject(project) {
        let projectToUpdate = await this.projectRepository
            .findOne(project.id, { select: ["description", "etatProjet"] });

        projectToUpdate.description = project.description ? project.description : projectToUpdate.description;
        projectToUpdate.etatProjet = project.etatProjet ? project.etatProjet : projectToUpdate.etatProjet;

        this.projectRepository.update({ id: project.id }, projectToUpdate)

    }




}
