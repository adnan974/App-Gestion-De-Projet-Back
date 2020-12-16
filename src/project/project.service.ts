import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from 'src/dto/createproject.dto';
import { UpdateProjectDto } from 'src/dto/updateProject.dto';
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

    getProjectById(projectId: number) {
        return this.projectRepository.findOne(projectId)
    }

    async getProjectTasks(projectId: number) {
        let project = await this.projectRepository.findOne(projectId, { relations: ["tache"] })
        return { tasks: project.tache }
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

    async createProject(project: CreateProjectDto) {

        let projectToAdd = await this.projectRepository.create(project);
        this.projectRepository.save(projectToAdd);

        /*
          createdProject.tagProjet = [];
  
  
          project.tagProjet.forEach(async (element) => {
              let projectTag = await this.projectTagRepository.findOne(element.id)
              createdProject.tagProjet.push(projectTag)
  
          });
  
          console.log(createdProject);
          this.projectRepository.save(createdProject);
        */


        /* // A FAIRE: que faire si les tag projet ne sont pas renseignés
         Object.keys(project.tagProjet).forEach(async key => {
             let projectTag = await this.projectTagRepository.findOne(project.tagProjet[key].id);
             createdProject.tagProjet.push(projectTag);
 
             // A FAIRE: JE vais 2 save au lieu de 1 car le tableau dans le foreach n'est pas le même que celui 
             // en dehors, je ne sais pas comment régler ce probleme
             this.projectRepository.save(createdProject);
         })*/
    }


    deleteProject(projectId) {
        this.projectRepository.delete(projectId)
    }

    // A FAIRE: pour l'instant j'update que le libelle et l'état. Je vais aussi devoir modifier 
    // les tags et les taches associés
    async updateProject(project: UpdateProjectDto) {
        let projectToUpdate = await this.projectRepository
            .findOne(project.id, { select: ["titre", "description", "etatProjet"] });


        // A FAIRE: cette partie n'accepte pas les valeurs vides alors que un client pourrait renvoyer
        // un champs vide intentionnellement
        projectToUpdate.titre = project.titre ? project.titre : projectToUpdate.titre;
        projectToUpdate.description = project.description ? project.description : projectToUpdate.description;
        projectToUpdate.etatProjet = project.etatProjet ? project.etatProjet : projectToUpdate.etatProjet;

        this.projectRepository.update({ id: project.id }, projectToUpdate)

    }

    async addATagToAProject(tagId: number, projectId: number) {
        let projectToUpdate = await this.projectRepository.findOne(projectId, { relations: ["tagProjet"] });
        let tagToAdd = await this.projectTagRepository.findOne(tagId);

        projectToUpdate.tagProjet.push(tagToAdd);

        this.projectRepository.save(projectToUpdate);

    }




}
