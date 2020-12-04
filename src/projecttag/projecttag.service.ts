import { Injectable } from '@nestjs/common';
import { ProjectTagRepository } from 'src/project/tagProject.repository';

@Injectable()
export class ProjectTagService {
    constructor(private projectTagRepository: ProjectTagRepository) { }

    deleteProjectTagById(projectTagId: number) {
        this.projectTagRepository.delete(projectTagId);
    }
}
