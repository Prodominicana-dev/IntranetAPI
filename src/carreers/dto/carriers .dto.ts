import { IsNotEmpty, IsEmpty, IsString } from 'class-validator';

export class CreateCarreersDto {
  @IsNotEmpty()
  @IsString()
  name: string;

}

export class UpdateCarreersDto {
  @IsEmpty()
  @IsString()
  name?: string;

 
}
