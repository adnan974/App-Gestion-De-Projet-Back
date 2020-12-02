import { Controller, Get ,Post, Body, Param} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.services';

@ApiTags("user/project")
@Controller("user/project")
export class UserProjectController {
  constructor(private readonly userService: UserService) {}

  // A FAIRE/ Ajouter les status code 
  @Get(":id")
  getProjetByUser(@Param() param){
    return this.userService.getAnUserProjects(param.id);
  }

}
