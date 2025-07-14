import { IsString, IsNotEmpty, IsEmpty } from 'class-validator';

export class ApplyNoifyUDto {

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    UserName: string;

    @IsString()
    @IsNotEmpty()
    telephone: string;

    @IsString()
    @IsNotEmpty()
    phone: string;
    
    @IsString()
    @IsNotEmpty()
    VacancyName: string;


}