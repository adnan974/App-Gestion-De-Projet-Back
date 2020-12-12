import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectstateController } from './projectstate.controller';
import { ProjectStateRepository } from './projectstate.repository';
import { ProjectstateService } from './projectstate.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectStateRepository])],
  controllers: [ProjectstateController],
  providers: [ProjectstateService]
})
export class ProjectstateModule { }
