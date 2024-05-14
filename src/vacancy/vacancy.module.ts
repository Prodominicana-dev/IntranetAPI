import { Module } from '@nestjs/common';
import { VacancyController } from './vacancy.controller';
import { VacancyService } from './vacancy.service';
import {PrismaService} from 'src/prisma/prisma.service'

@Module({
  controllers: [VacancyController],
  providers: [VacancyService,PrismaService]
})
export class VacancyModule {}
