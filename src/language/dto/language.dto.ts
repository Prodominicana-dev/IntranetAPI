import { IsNotEmpty, IsEmpty, IsString, IsNumber } from 'class-validator';

export class CreateLanguageDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  level: number;

  @IsNotEmpty()
  @IsString()
  userId: string;
}

export class UpdateLanguageDto {
  @IsEmpty()
  @IsString()
  name?: string;

  @IsEmpty()
  @IsNumber()
  level?: number;

  @IsEmpty()
  @IsString()
  userId?: string;
}
