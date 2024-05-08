import { IsNotEmpty, IsEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmpty()
  @IsString()
  description?: string;
}

export class UpdateCategoryDto {
  @IsEmpty()
  @IsString()
  name?: string;

  @IsEmpty()
  @IsString()
  description?: string;
}
