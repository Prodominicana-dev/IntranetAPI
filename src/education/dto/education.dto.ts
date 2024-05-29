import {
  IsNotEmpty,
  IsEmpty,
  IsString,
  IsDate,
  IsBoolean,
} from 'class-validator';

export class CreateEducationDto {
  @IsNotEmpty()
  @IsString()
  institution: string;

  @IsEmpty()
  @IsString()
  title?: string;

  @IsEmpty()
  @IsString()
  area?: string;

  @IsNotEmpty()
  @IsString()
  degreeId: string;

  @IsEmpty()
  @IsString()
  careerId: string;

  @IsNotEmpty()
  @IsDate()
  startDate: Date;

  @IsEmpty()
  @IsDate()
  endDate?: Date;

  @IsNotEmpty()
  @IsString()
  userId: string;
}

export class UpdateEducationDto {
  @IsEmpty()
  @IsString()
  institution?: string;

  @IsEmpty()
  @IsString()
  title?: string;

  @IsEmpty()
  @IsString()
  area?: string;

  @IsEmpty()
  @IsString()
  degreeId?: string;

  @IsEmpty()
  @IsString()
  careerId: string;

  @IsEmpty()
  @IsDate()
  startDate?: Date;

  @IsEmpty()
  @IsDate()
  endDate?: Date;
}
