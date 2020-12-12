import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProjectstateService } from './projectstate.service';

@ApiTags("projectstate")
@Controller('projectstate')
export class ProjectstateController {
    constructor(private projectStateService: ProjectstateService) { }

    @Get()
    @ApiOperation({
        summary: "get all project states"
    })
    getAllProjectStates() {
        return this.projectStateService.getAllProjectStates()
    }
}
