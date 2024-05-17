import { IsNotEmpty, IsEmpty, IsString } from "class-validator";

export class CreatePollCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;

}

export class UpdatePollCategoryDto {
  @IsEmpty()
  @IsString()
  name?: string;
  
}