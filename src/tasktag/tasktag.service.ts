import { Injectable } from '@nestjs/common';
import { TaskTagRepository } from 'src/tasktag/tagTask.repository';

@Injectable()
export class TasktagService {

    constructor(private taskTagRepository: TaskTagRepository) { }

    deleteTaskTagById(taskTagId: number) {
        this.taskTagRepository.delete(taskTagId);
    }
}
