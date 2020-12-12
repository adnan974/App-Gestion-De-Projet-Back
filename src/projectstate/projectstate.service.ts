import { Injectable } from '@nestjs/common';
import { ProjectStateRepository } from './projectstate.repository';

@Injectable()
export class ProjectstateService {
    constructor(private projectStateRepository: ProjectStateRepository) { }

    async getAllProjectStates() {
        let projectStateData = await this.projectStateRepository.find();
        return { projectStateData };
    }
}
