import { IsEmpty, IsNotEmpty, IsString } from 'class-validator';

export class CreateQuestionOptionDto {
  @IsNotEmpty()
  @IsString()
  option: string;

  @IsNotEmpty()
    @IsString()
    questionId: string;
}

export class CreateManyQuestionOptionDto {
  @IsNotEmpty()
  @IsString()
  option: string;

  @IsEmpty()
    @IsString()
    questionId?: string;
}

export class UpdateQuestionOptionDto {
  
    @IsEmpty()
  @IsString()
  option?: string;

  @IsEmpty()
  @IsString()
  questionId?: string;
}