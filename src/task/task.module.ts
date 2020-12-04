import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskTagRepository } from '../tasktag/tagTask.repository';
import { TaskController } from './task.controller';
import { TaskRepository } from './task.repository';
import { TaskService } from './task.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository, TaskTagRepository])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule { }
