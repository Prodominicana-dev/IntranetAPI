import { IsNotEmpty, IsEmpty, IsString } from "class-validator";

export class CreateDirectionDto {
  @IsNotEmpty()
  @IsString()
  name: string;


}

export class UpdateDirectionDto {
  @IsEmpty()
  @IsString()
  name?: string;

}