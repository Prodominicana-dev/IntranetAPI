import { IsNotEmpty, IsEmpty, IsString } from "class-validator";

export class CreateProfessionalReferenceDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    phone: string;

    @IsNotEmpty()
    @IsString()
    company: string;

    @IsNotEmpty()
    @IsString()
    position: string;

    @IsNotEmpty()
    @IsString()
    userId: string;
}

export class UpdateProfessionalReferenceDto {
    @IsEmpty()
    @IsString()
    name?: string;

    @IsEmpty()
    @IsString()
    email?: string;

    @IsEmpty()
    @IsString()
    phone?: string;

    @IsEmpty()
    @IsString()
    company?: string;

    @IsEmpty()
    @IsString()
    position?: string;

    @IsEmpty()
    @IsString()
    userId?: string;
}