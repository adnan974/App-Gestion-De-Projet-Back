import { Controller, Get, Param } from '@nestjs/common';
import {  ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ProjectService } from './project.service';

@ApiTags("project")
@Controller('project')
export class ProjectController {

    constructor(private readonly projectservice: ProjectService) {}

    @Get()
    @ApiOperation({
        summary:"get all projects"
    })
    getProjects(){
        return this.projectservice.getAllProjects();
    }

    @Get("/:id")
    @ApiOperation({
        summary:"get a project depend on user id"
    })
    @ApiParam({
        name:"id",
        required:true,
        type:Number,
        description:"user id to display",
        example:"32"
    })
    getUserProject(@Param() params){
        return this.projectservice.getProjectByUserId(params.id);
    }


}
