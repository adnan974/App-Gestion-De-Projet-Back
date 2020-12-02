import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UpdateDateColumn } from 'typeorm';
import { TaskService } from './task.service';

@ApiTags("task")
@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) { }

    @Post("create")
    @ApiOperation({
        summary: "create a task"
    })
    @ApiParam({
        name: "task",
        required: true,
        type: Object
    })
    createTask(@Body("task") task) {
        this.taskService.createTask(task)

    }

    @ApiOperation({
        summary: "update a task"
    })
    @Patch("update")
    @ApiOperation({
        summary: "update a task"
    })
    updateTask(@Body("task") task) {
        this.taskService.updateTask(task)
    }

    @Delete("/delete/:id")
    @ApiOperation({
        summary: "delete a task"
    })
    @ApiParam({
        name: "id",
        required: true,
        type: Number
    })
    deleteTask(@Param() param) {
        this.taskService.deleteTask(param.id)
    }
}
