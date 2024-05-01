import { IsNotEmpty, IsEmpty, IsString, IsNumber } from "class-validator";

export class CreateGradeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmpty()
  @IsNumber()
  priority?: number;
}

export class UpdateGradeDto {
  @IsEmpty()
  @IsString()
  name?: string;

  @IsEmpty()
  @IsNumber()
  priority?: number;
}