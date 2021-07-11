
import { Controller, Get, Post, Body, Param, ParseIntPipe, UseGuards, Req, Patch } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/authentification/jwt-authentification.guard';
import { UpdateUserDto } from 'src/dto/updateUser.dto';
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

    @UseGuards(JwtAuthGuard)
    @Patch()
    @ApiOperation({
        summary: "get all users"
    })
    updateUser(user:UpdateUserDto) {

        return this.userService.getAllUsers();
    }


}
