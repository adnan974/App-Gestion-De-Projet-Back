import { Body, Controller, Delete, Param, Patch } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UpdateProjectTagDTO } from 'src/dto/updateprojecttag.dto';
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

    @Patch("/update")
    @ApiOperation({
        summary: "update a project tag"
    })
    @ApiParam({
        name: "projectTagId",
        required: true,
        type: Number
    })
    updateProjectTag(@Body("projectTag") projectTag: UpdateProjectTagDTO) {

        this.projectTagService.updateProgetTag(projectTag)
    }


}
