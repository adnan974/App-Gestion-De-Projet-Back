
import { Controller, Get, Post, Body, Param, ParseIntPipe, UseGuards, Req } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentification/jwt-authentification.guard';
import { UserService } from './user.services';

@ApiTags("user")
@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @UseGuards(JwtAuthGuard)
    @Get()
    @ApiOperation({
        summary: "get all users"
    })
    getAllUsers() {

        return this.userService.getAllUsers();
    }



}
