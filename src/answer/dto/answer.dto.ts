import { IsJSON, IsNotEmpty, IsEmpty, IsString } from "class-validator";

export class CreateAnswerDto {
  @IsNotEmpty()
  @IsJSON()
  answer: string;

  @IsNotEmpty()
  @IsString()
  questionId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;
}

export class UpdateAnswerDto {
  @IsEmpty()
  @IsJSON()
  answer?: string;

  @IsEmpty()
  @IsString()
  questionId?: string;

  @IsEmpty()
  @IsString()
  userId?: string;
}
