import { Module } from '@nestjs/common';
import { QuestionOptionController } from './question-option.controller';
import { QuestionOptionService } from './question-option.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [QuestionOptionController],
  providers: [QuestionOptionService, PrismaService]
})
export class QuestionOptionModule {}
