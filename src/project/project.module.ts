import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { ProjectRepository } from './project.repository'
import { ProjectTagRepository } from './tagProject.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectRepository, ProjectTagRepository])],
  controllers: [ProjectController],
  providers: [ProjectService]
})
export class ProjectModule { }
