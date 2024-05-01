import { IsNotEmpty, IsEmpty, IsString } from "class-validator";

export class CreateApplicationDto {
    @IsNotEmpty()
    @IsString()
    userId: string;
    
    @IsNotEmpty()
    @IsString()
    vacancyId: string;
    
    @IsNotEmpty()
    @IsString()
    status: string;
}

export class UpdateApplicationDto {
    @IsEmpty()
    @IsString()
    userId?: string;

    @IsEmpty()
    @IsString()
    vacancyId?: string;

    @IsEmpty()
    @IsString()
    status?: string;
}