import { IsString, IsNotEmpty, IsEmpty } from 'class-validator';

export class ApprovedUDto {

    @IsString()
    @IsNotEmpty()
    email: string;
    
    @IsString()
    @IsNotEmpty()
    UserName: string;


}