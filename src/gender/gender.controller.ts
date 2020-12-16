import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GenderService } from './gender.service';

@ApiTags("gender")
@Controller('gender')
export class GenderController {
    constructor(private genderService: GenderService) { }

    @Get()
    @ApiOperation({
        summary: "get all genders"
    })
    getGenders() {
        return this.genderService.getAllGenders()
    }
}
