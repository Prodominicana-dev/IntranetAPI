import { IsNotEmpty, IsEmpty, IsString } from "class-validator";

export class CreatePersonalReferenceDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsString()
    relationship: string;

    @IsNotEmpty()
    @IsString()
    userId: string;
}

export class UpdatePersonalReferenceDto {
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
    @IsString()
    userId?: string;
}