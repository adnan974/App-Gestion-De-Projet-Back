import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {  ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ProjectRepository } from './project.repository';
import { ProjectService } from './project.service';

@ApiTags("project")
@Controller('project')
export class ProjectController {

    constructor(private readonly projectService: ProjectService,private projectRepository : ProjectRepository) {}

    @Get()
    @ApiOperation({
        summary:"get all projects"
    })
    getProjects(){
        return this.projectService.getAllProjects();
    }

   

    @Post("/create")
    createProject(@Body("project") project){
        console.log(project)
        return this.projectService.createProject(project)
    }


}
