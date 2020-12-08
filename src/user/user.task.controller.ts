import { Controller, Get, Post, Body, Param, ParseIntPipe, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentification/jwt-authentification.guard';
import { UserService } from './user.services';

@ApiTags("user/task")
@Controller("user/task")
export class UserTaskController {
  constructor(private readonly userService: UserService) { }

  // A FAIRE/ Ajouter les status code 
  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({
    summary: "get a task by user id"
  })

  getProjetByUser(@Req() req) {
    return this.userService.getAnUserTasks(req.user.id);
  }

}