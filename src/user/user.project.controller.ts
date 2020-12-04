import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.services';

@ApiTags("user/project")
@Controller("user/project")
export class UserProjectController {
  constructor(private readonly userService: UserService) { }

  // A FAIRE/ Ajouter les status code 
  @Get(":id")
  @ApiOperation({
    summary: "get project by user id"
  })
  getProjetByUser(@Param("id", ParseIntPipe) id) {
    return this.userService.getAnUserProjects(id);
  }

  @Post()
  @ApiOperation({
    summary: "add a task to a project"
  })
  @ApiParam({
    name: "idProject",
    required: true,
    type: Number
  })
  @ApiParam({
    name: "idUser",
    required: true,
    type: Number
  })
  addProjectToAnUser(@Body("idProject") idProject, @Body("idUser") iduser) {

    return this.userService.addProjectToAnUser(idProject, iduser)
  }

}
