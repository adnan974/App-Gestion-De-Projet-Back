import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { Projet } from '../models/projet.entity';
import { ProjectRepository } from './project.repository';


@Injectable()
export class ProjectService {

    constructor(private projectRepository:ProjectRepository){

    }

    getAllProjects() {
        let projectsData = this.projectRepository.find();
        return projectsData;
    }

    createProject(project){
        this.projectRepository.create({description:project.description,
            utilisateurCreation:project.utilisateurCreation,etatProjet:project.etatProjet,
            tagProjet:project.tagProjet}).save()
    }


    

}
