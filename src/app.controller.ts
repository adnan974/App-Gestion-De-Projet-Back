import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags("app module")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("pass: "+process.env.DB_PASSWORD+" username: "+process.env.DB_USERNAME)

    return this.appService.getHello();
  }
}
