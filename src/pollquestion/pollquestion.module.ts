import { Module } from '@nestjs/common';
import { PollquestionService } from './pollquestion.service';
import { PollquestionController } from './pollquestion.controller';
import { PrismaService } from'src/prisma/prisma.service';

@Module({
  controllers: [PollquestionController],
  providers: [PollquestionService,PrismaService]
})
export class PollquestionModule {}
