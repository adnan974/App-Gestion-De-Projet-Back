import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { Projet } from '../models/projet.entity';


@Injectable()
export class ProjectService {

    getAllProjects(){
        let projectsData = Projet.find();
        return projectsData;
    }


    
    getProjectByUserId(id:number){
        const entityManager = getManager(); 

        // Problème :  utilisateurId sans guillemets ne prend pas en compte les majuscules. 
        // SOlution : Utiliser les guillemets
        return entityManager.query(`SELECT * FROM
        utilisateur_projet__projet 
        WHERE
        "utilisateurId"=${id}`)
    }
}
