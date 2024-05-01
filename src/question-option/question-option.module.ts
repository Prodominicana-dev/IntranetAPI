import { Module } from '@nestjs/common';
import { QuestionOptionController } from './question-option.controller';
import { QuestionOptionService } from './question-option.service';

@Module({
  controllers: [QuestionOptionController],
  providers: [QuestionOptionService]
})
export class QuestionOptionModule {}
