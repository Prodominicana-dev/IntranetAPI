import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @IsString()
  question: string;

  @IsNotEmpty()
  @IsString()
  type: string;
}

export class UpdateQuestionDto {
  
  @IsString()
  question?: string;

  @IsString()
  type?: string;
}