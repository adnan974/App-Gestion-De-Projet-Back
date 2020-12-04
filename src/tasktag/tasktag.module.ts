import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskTagRepository } from './tagTask.repository';
import { TasktagController } from './tasktag.controller';
import { TasktagService } from './tasktag.service';

@Module({
  imports: [TypeOrmModule.forFeature([TaskTagRepository])],
  controllers: [TasktagController],
  providers: [TasktagService]
})
export class TasktagModule { }
