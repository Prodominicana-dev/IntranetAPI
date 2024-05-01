import { IsString, IsNotEmpty, IsArray, IsOptional, IsEmpty } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  question: string;

  @IsNotEmpty()
  @IsString()
  type: string;
}

export class UpdateQuestionDto {
  
    @IsEmpty()
  @IsString()
  question?: string;

  @IsEmpty()
  @IsString()
  type?: string;
}