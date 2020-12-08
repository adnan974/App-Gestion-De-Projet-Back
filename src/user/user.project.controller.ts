import { Controller, Get, Post, Body, Param, ParseIntPipe, UseGuards, Req } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentification/jwt-authentification.guard';
import { UserService } from './user.services';

@ApiTags("user/project")
@Controller("user/project")
export class UserProjectController {
  constructor(private readonly userService: UserService) { }

  // A FAIRE/ Ajouter les status code 
  // A FAIRE et pour le rest : ajouter le guard pour le jwt et récupérer automatiquement l'id de l'user
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({
    summary: "get project by user id"
  })
  getProjetByUser(@Req() req) {
    console.log(req.user)
    return this.userService.getAnUserProjects(req.user.id);
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
