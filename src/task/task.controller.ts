import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { triggerAsyncId } from 'async_hooks';
import { CreateTaskDto } from 'src/dto/createtask.dto';
import { UpdateTaskDto } from 'src/dto/updatetask.dto';
import { UpdateDateColumn } from 'typeorm';
import { TaskService } from './task.service';

@ApiTags("task")
@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService) { }

    @Get("/:id")
    @ApiOperation({
        summary: "get a task by Id"
    })
    getOneTask(@Param('id') id: number) {
        return this.taskService.getTaskById(id);
    }


    @Post("create")
    @ApiOperation({
        summary: "create a task"
    })
    @ApiParam({
        name: "task",
        required: true,
        type: Object
    })
    createTask(@Body("task") task: CreateTaskDto) {
        return this.taskService.createTask(task)

    }

    @ApiOperation({
        summary: "update a task"
    })
    @Patch("update")
    @ApiOperation({
        summary: "update a task"
    })
    updateTask(@Body("task") task: UpdateTaskDto) {
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
    deleteTask(@Param("id", ParseIntPipe) id: number) {
        this.taskService.deleteTask(id)
    }

    @Post("/addtag")
    @ApiOperation({
        summary: "add a Tag to a task"
    })
    @ApiParam({
        name: "taskId",
        required: true,
        type: Number
    })
    @ApiParam({
        name: "tagId",
        required: true,
        type: Number
    })
    addATagToATask(@Body("tagId") tagId: number, @Body("taskId") taskId: number) {
        this.taskService.addATagToATask(tagId, taskId)

    }

}
