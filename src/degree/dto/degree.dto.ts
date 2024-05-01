import { IsNotEmpty, IsEmpty, IsString, IsNumber } from "class-validator";

export class CreateDegreeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmpty()
  @IsNumber()
  priority?: number;
}

export class UpdateDegreeDto {
  @IsEmpty()
  @IsString()
  name?: string;

  @IsEmpty()
  @IsNumber()
  priority?: number;
}