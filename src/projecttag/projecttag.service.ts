import { Injectable } from '@nestjs/common';
import { UpdateProjectTagDTO } from 'src/dto/updateprojecttag.dto';
import { ProjectTagRepository } from 'src/project/tagProject.repository';

@Injectable()
export class ProjectTagService {
    constructor(private projectTagRepository: ProjectTagRepository) { }

    async getAllProjectTags() {
        let projectTags = await this.projectTagRepository.find()
        return { projecttags: projectTags };
    }

    deleteProjectTagById(projectTagId: number) {
        this.projectTagRepository.delete(projectTagId);
    }

    async updateProgetTag(projectTag: UpdateProjectTagDTO) {
        let projectTagToUpdate = await this.projectTagRepository
            .findOne(projectTag.id, { select: ["libelle", "couleurFond"] });


        // A FAIRE: cette partie n'accepte pas les valeurs vides alors que un client pourrait renvoyer
        // un champs vide intentionnellement
        projectTagToUpdate.libelle = projectTag.libelle ? projectTag.libelle : projectTagToUpdate.libelle;
        projectTagToUpdate.couleurFond = projectTag.couleurFond;

        this.projectTagRepository.update({ id: projectTag.id }, projectTagToUpdate)
    }
}
