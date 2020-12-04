import { Controller, Delete, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { TasktagService } from './tasktag.service';

@ApiTags("tasktag")
@Controller('tasktag')
export class TasktagController {

    constructor(private taskTagService: TasktagService) { }

    @Delete("/delete/:id")
    @ApiOperation({
        summary: "delete a task tag"
    })
    @ApiParam({
        name: "taskTagId",
        required: true,
        type: Number
    })
    deleteTag(@Param("id") taskTagId: number) {
        this.taskTagService.deleteTaskTagById(taskTagId);

    }
}
