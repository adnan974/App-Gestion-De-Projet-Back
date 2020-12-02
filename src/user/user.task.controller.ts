import { Controller, Get ,Post, Body, Param} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.services';

@ApiTags("user/task")
@Controller("user/task")
export class UserTaskController {
  constructor(private readonly userService: UserService) {}

  // A FAIRE/ Ajouter les status code 
  @Get(":id")
  @ApiOperation({
        summary:"get a task by user id"
    })
  @ApiParam({
    name:"id",
    required:true,
    type:Number
    })
  getProjetByUser(@Param() param){
    return this.userService.getAnUserTasks(param.id);
  }

}