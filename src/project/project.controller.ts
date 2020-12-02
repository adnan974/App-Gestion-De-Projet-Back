import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ProjectRepository } from './project.repository';
import { ProjectService } from './project.service';

@ApiTags("project")
@Controller('project')
export class ProjectController {

    constructor(private readonly projectService: ProjectService, private projectRepository: ProjectRepository) { }

    @Get()
    @ApiOperation({
        summary: "get all projects"
    })
    getProjects() {
        return this.projectService.getAllProjects();
    }



    @Post("/create")
    @ApiOperation({
        summary: "create a project"
    })
    @ApiParam({
        name: "project",
        required: true,
        type: Object
    })
    // A FAIRE: devrai-je créer un DTO pour la création ?
    createProject(@Body("project") project) {
        console.log(project)
        return this.projectService.createProject(project)
    }

    @Patch("update")
    @ApiOperation({
        summary: "update a project"
    })
    updateProject(@Body("project") project) {
        this.projectService.updateProject(project)
    }

    @Delete("/delete/:id")
    @ApiOperation({
        summary: "dealete a project"
    })
    deleteProject(@Param() param) {
        this.projectService.deleteProject(param.id)
    }


}
