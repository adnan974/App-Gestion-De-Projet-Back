import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectTagRepository } from 'src/project/tagProject.repository';
import { TaskprojectController } from './projecttag.controller';
import { ProjectTagService } from './projecttag.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectTagRepository])],
  controllers: [TaskprojectController],
  providers: [ProjectTagService]
})
export class ProjectTagModule { }
