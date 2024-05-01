import { IsNotEmpty, IsEmpty, IsDate, IsString } from "class-validator";

export class CreateWorkExperienceDto{
    @IsNotEmpty()
    @IsString()
    company: string;

    @IsNotEmpty()
    @IsString()
    position: string;

    @IsEmpty()
    @IsString()
    currency?: string;

    @IsEmpty()
    @IsString()
    salary?: string;

    @IsNotEmpty()
    @IsString()
    area: string;

    @IsNotEmpty()
    @IsString()
    supervisor: string;

    @IsEmpty()
    @IsString()
    industry?: string;

    @IsEmpty()
    @IsString()
    functions?: string;

    @IsEmpty()
    @IsString()
    phone?: string;

    @IsNotEmpty()
    @IsString()
    userId: string;
    
    @IsNotEmpty()
    @IsDate()
    startDate: Date;

    @IsEmpty()
    @IsDate()
    endDate?: Date;
}

export class UpdateWorkExperienceDto{
    @IsEmpty()
    @IsString()
    company?: string;

    @IsEmpty()
    @IsString()
    position?: string;

    @IsEmpty()
    @IsString()
    currency?: string;

    @IsEmpty()
    @IsString()
    salary?: string;

    @IsEmpty()
    @IsString()
    area?: string;

    @IsEmpty()
    @IsString()
    supervisor?: string;

    @IsEmpty()
    @IsString()
    industry?: string;

    @IsEmpty()
    @IsString()
    functions?: string;

    @IsEmpty()
    @IsString()
    phone?: string;

    @IsEmpty()
    @IsString()
    userId?: string;

    @IsEmpty()
    @IsDate()
    startDate?: Date;

    @IsEmpty()
    @IsDate()
    endDate?: Date;
}