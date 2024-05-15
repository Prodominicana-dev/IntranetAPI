import { IsNotEmpty, IsEmpty, IsString, IsDate, IsBoolean } from "class-validator";

export class CreateVacancyDto {
    
        @IsNotEmpty()
        @IsString()
        title: string;
        
        @IsNotEmpty()
        @IsString()
        description: string;

        @IsNotEmpty()
        @IsString()
        requirements: string;
        
        @IsNotEmpty()
        @IsString()
        salary: string;
        
        @IsNotEmpty()
        @IsString()
        currency: string;
        
        @IsNotEmpty()
        @IsString()
        status: boolean;

        @IsNotEmpty()
        @IsDate()
        startDate: Date;
        
        @IsNotEmpty()
        @IsBoolean()
        category:any;

        @IsEmpty()
        @IsDate()
        endDate?: Date;


        
    }
    
    export class UpdateVacancyDto {

        @IsEmpty()
        @IsString()
        title?: string;
    
        @IsEmpty()
        @IsString()
        description?: string;
        
        @IsEmpty()
        @IsString()
        requirements?: string;

        @IsEmpty()
        @IsString()
        salary?: string;
        
        @IsEmpty()
        @IsString()
        currency?: string;

        
        @IsEmpty()
        @IsDate()
        startDate?: Date;
       
        @IsNotEmpty()
        @IsBoolean()
        status: boolean;

        @IsEmpty()
        @IsDate()
        endDate?: Date;


    
}