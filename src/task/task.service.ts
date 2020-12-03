import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'src/dto/createtask.dto';
import { UpdateTaskDto } from 'src/dto/updatetask.dto';
import { TaskTagRepository } from './tagTask.repository';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
    constructor(private taskRepository: TaskRepository, private taskTagRepository: TaskTagRepository) { }
    async createTask(task: CreateTaskDto) {


        // Probleme rencontré : createdTask n'a pas l'attribut lié a la relation "tag tache" 
        //                      Du coup je ne peux pas directement rajouter de tag à la tache
        // Solution: il faut générer l'attribut soir même : createdTask.tagTache= []
        // MAJ : ce pb apparait psq le Json n'envoyait pas de tableau d'object pour les tag_tache. Il envoyait
        //       des objets dans un objet. Si C'est bien un tableau d'object qui est envoyé, je peux ecrire le
        //       code ci-dessous
        await this.taskRepository.create(task).save();

        // A FAIRE: que faire si les tag projet ne sont pas renseignés





    }

    deleteTask(taskId: number) {
        this.taskRepository.delete(taskId)
    }

    // A FAIRE: pour l'instant j'update que le libelle et la description. Je vais aussi devoir modifier 
    // les tags et les projets associés
    async updateTask(task: UpdateTaskDto) {

        let taskToUpdate = await this.taskRepository.findOne(task.id, { select: ["libelle", "description"] })
        taskToUpdate.libelle = task.libelle ? task.libelle : taskToUpdate.libelle
        taskToUpdate.description = task.description ? task.description : taskToUpdate.description


        this.taskRepository.update({ id: task.id }, taskToUpdate)
    }

    async addATagToATask(tagId: number, taskId: number) {
        let taskToUpdate = await this.taskRepository.findOne(taskId, { relations: ["tagTache"] });
        let tagToAdd = await this.taskTagRepository.findOne(tagId);

        taskToUpdate.tagTache.push(tagToAdd);

        this.taskRepository.save(taskToUpdate);

    }

}
