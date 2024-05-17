import { IsNotEmpty, IsEmpty, IsString } from "class-validator";

export class CreateDepartmentDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  directions : any;

}

export class UpdateDepartmentDto {
  @IsEmpty()
  @IsString()
  name?: string;
  
  @IsEmpty()
  @IsString()
  directions?: any;
}