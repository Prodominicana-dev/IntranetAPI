import { IsNotEmpty, IsEmpty, IsString } from "class-validator";

export class CreatePollCommitmentCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;


}

export class UpdatePollCommitmentCategoryDto {
  @IsEmpty()
  @IsString()
  name?: string;

}