import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentification/jwt-authentification.guard';
import { CreateProjectDto } from 'src/dto/createproject.dto';
import { UpdateProjectDto } from 'src/dto/updateProject.dto';
import { ProjectRepository } from './project.repository';
import { ProjectService } from './project.service';

@ApiTags("project")
@Controller('project')
export class ProjectController {

    constructor(private readonly projectService: ProjectService, private projectRepository: ProjectRepository) { }


    @Get("/tags/:id")
    @ApiOperation({
        summary: "get project tags"
    })
    @ApiParam({
        name: "id",
        required: true,
        type: Number
    })
    getProjectTags(@Param("id") id: number) {
        return this.projectService.getProjectTags(id);
    }

    @Get()
    @ApiOperation({
        summary: "get all projects"
    })
    getProjects() {
        return this.projectService.getAllProjects();
    }

    @Get("/:id")
    @ApiOperation({
        summary: "get a project by id"
    })
    @ApiParam({
        name: "id",
        required: true,
        type: Number
    })
    getOneProject(@Param("id") id: number) {
        return this.projectService.getProjectById(id)
    }

    @Get("/task/:id")
    @ApiOperation({
        summary: "get project tasks"
    })
    getProjectTasks(@Param("id") id: number) {
        return this.projectService.getProjectTasks(id);
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
    createProject(@Body("project") project: CreateProjectDto) {
        return this.projectService.createProject(project)
    }

    @Patch("update")
    @ApiOperation({
        summary: "update a project"
    })
    updateProject(@Body("project") project: UpdateProjectDto) {
        this.projectService.updateProject(project)
    }

    @Delete("/delete/:id")
    @ApiOperation({
        summary: "dealete a project"
    })
    deleteProject(@Param("id", ParseIntPipe) id: number) {
        this.projectService.deleteProject(id)
    }

    @Post("/addtag")
    @ApiOperation({
        summary: "add a Tag to a project"
    })
    @ApiParam({
        name: "projectId",
        required: true,
        type: Number
    })
    @ApiParam({
        name: "tagId",
        required: true,
        type: Number
    })
    addATagToATask(@Body("tagId") tagId: number, @Body("projectId") projectId: number) {
        this.projectService.addATagToAProject(tagId, projectId)

    }


}
