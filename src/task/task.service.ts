import { Injectable } from '@nestjs/common';
import { TaskTagRepository } from './tagTask.repository';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    constructor(private taskRepository: TaskRepository, private taskTagRepository: TaskTagRepository) { }
    async createTask(task) {



        let createdTask = await this.taskRepository.create({
            libelle: task.libelle,
            description: task.description,
            projet: task.projet
        });

        // A FAIRE : Actuellement ce code focntion que si il y'a 1 tag dans une tache. Trouver aussi comment faire 
        // Dans le cas ou il y'ne a plusieurs
        // A FAIRE: que faire si les tag projet ne sont pas renseignés
        let taskTag = await this.taskTagRepository.findOne(task.tagTache.id);


        createdTask.tagTache = [taskTag];

        this.taskRepository.save(createdTask);
    }

    deleteTask(taskId) {
        this.taskRepository.delete(taskId)
    }

    // A FAIRE: pour l'instant j'update que le libelle et la description. Je vais aussi devoir modifier 
    // les tags et les projets associés
    async updateTask(task) {

        let taskToUpdate = await this.taskRepository.findOne(task.id, { select: ["libelle", "description"] })
        taskToUpdate.libelle = task.libelle ? task.libelle : taskToUpdate.libelle
        taskToUpdate.description = task.description ? task.description : taskToUpdate.description


        this.taskRepository.update({ id: task.id }, taskToUpdate)
    }

}
