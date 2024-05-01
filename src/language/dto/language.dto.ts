import { IsNotEmpty, IsEmpty, IsString } from "class-validator";

export class CreateLanguageDto {
    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    level: string;

    @IsNotEmpty()
    @IsString()
    userId: string;
}

export class UpdateLanguageDto {
    @IsEmpty()
    @IsString()
    name?: string;

    @IsEmpty()
    @IsString()
    level?: string;

    @IsEmpty()
    @IsString()
    userId?: string;
}