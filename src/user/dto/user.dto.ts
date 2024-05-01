import { IsEmpty, IsString, IsNumber, IsNotEmpty, IsBooleanString, IsDateString, IsBoolean, isBooleanString } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  auth0Id: string;

  @IsEmpty()
  @IsString()
  image?: string;

  @IsEmpty()
  @IsString()
  telephone?: string;

  @IsEmpty()
  @IsString()
  phone?: string;

  @IsEmpty()
  @IsString()
  countryId?: string;

  @IsEmpty()
    @IsString()
    nationalityId?: string;

    @IsEmpty()
    @IsString()
    province?: string;

    @IsEmpty()
    @IsString()
    gender?: string;

    @IsEmpty()
    @IsDateString()
    birthdate?: Date;

    @IsEmpty()
    @IsString()
    documentType?: string;

    @IsEmpty()
    @IsString()
    documentNumber?: string;

    @IsEmpty()
    @IsString()
    civilStatus?: string;

    @IsEmpty()
    @IsBoolean()
    hasLicense?: boolean;

    @IsEmpty()
    @IsBoolean()
    hasVehicule?: boolean;

    @IsEmpty()
    @IsBoolean()
    hasRelationInCompany?: boolean;
}

export class UpdateUserDto {
    @IsEmpty()
    @IsString()
    auth0Id?: string;
    
    @IsEmpty()
    @IsString()
    image?: string;
    
    @IsEmpty()
    @IsString()
    telephone?: string;
    
    @IsEmpty()
    @IsString()
    phone?: string;
    
    @IsEmpty()
    @IsString()
    countryId?: string;
    
    @IsEmpty()
    @IsString()
    nationalityId?: string;

    @IsEmpty()
    @IsString()
    province?: string;

    @IsEmpty()
    @IsString()
    gender?: string;

    @IsEmpty()
    @IsDateString()
    birthdate?: Date;

    @IsEmpty()
    @IsString()
    documentType?: string;

    @IsEmpty()
    @IsString()
    documentNumber?: string;

    @IsEmpty()
    @IsString()
    civilStatus?: string;

    @IsEmpty()
    @IsBoolean()
    hasLicense?: boolean;

    @IsEmpty()
    @IsBoolean()
    hasVehicule?: boolean;

    @IsEmpty()
    @IsBoolean()
    hasRelationInCompany?: boolean;
}