import { IsString, IsBoolean, IsNotEmpty, IsEmpty } from 'class-validator';

export class CreateRelationshipDto {
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmpty()
  @IsString()
  phone?: string;

  @IsNotEmpty()
  @IsString()
  relationship: string;

  @IsNotEmpty()
  @IsBoolean()
  isInTheCompany: boolean;
}

export class UpdateRelationshipDto {
  @IsEmpty()
  @IsString()
  name?: string;

  @IsEmpty()
  @IsString()
  phone?: string;

  @IsEmpty()
  @IsString()
  relationship?: string;

  @IsEmpty()
  @IsBoolean()
  isInTheCompany?: boolean;
}
