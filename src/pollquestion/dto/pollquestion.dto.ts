import { IsNotEmpty, IsEmpty, IsString } from "class-validator";

export class CreatePollQuestionDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  directions : any;

  @IsNotEmpty()
  @IsString()
  pollCommitmentcategory : any;

}

export class UpdatePollQuestionDto {
  @IsEmpty()
  @IsString()
  name?: string;
  
  @IsEmpty()
  @IsString()
  directions?: any;

  @IsNotEmpty()
  @IsString()
  pollCommitmentcategory?: any;

}