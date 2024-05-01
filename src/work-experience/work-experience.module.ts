import { Module } from '@nestjs/common';
import { WorkExperienceController } from './work-experience.controller';
import { WorkExperienceService } from './work-experience.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [WorkExperienceController],
  providers: [WorkExperienceService, PrismaService]
})
export class WorkExperienceModule {}
