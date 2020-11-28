import { Controller, Get, Param } from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {

    constructor(private readonly projectservice: ProjectService) {}

    @Get()
    getProjects(){
        return this.projectservice.getAllProjects();
    }

    @Get("test/:id")
    test(@Param() params){
        return this.projectservice.getProjectByUserId(params.id);
    }


}
