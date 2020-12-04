import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { ProjectTagService } from './projecttag.service';


@ApiTags("projecttag")
@Controller('projecttag')
export class TaskprojectController {

    constructor(private projectTagService: ProjectTagService) { }

    @Delete("/delete/:id")
    @ApiOperation({
        summary: "delete a project tag"
    })
    @ApiParam({
        name: "projectTagId",
        required: true,
        type: Number
    })
    deleteProjectTag(@Param("id") projectTagId: number) {
        this.projectTagService.deleteProjectTagById(projectTagId)
    }

}
