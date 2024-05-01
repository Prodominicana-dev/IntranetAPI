import { Module } from '@nestjs/common';
import { AnswerController } from './answer.controller';
import { AnswerService } from './answer.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [AnswerController],
  providers: [AnswerService, PrismaService]
})
export class AnswerModule {}
