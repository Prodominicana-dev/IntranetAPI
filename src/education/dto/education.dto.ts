import { IsNotEmpty, IsEmpty, IsString, IsDate, IsBoolean } from "class-validator";

export class CreateEducationDto {
    @IsNotEmpty()
    @IsString()
    institution: string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    area: string;

    @IsNotEmpty()
    @IsBoolean()
    status: boolean;

    @IsNotEmpty()
    @IsString()
    degreeId: string;

    @IsNotEmpty()
    @IsDate()
    startDate: Date;

    @IsEmpty()
    @IsDate()
    endDate?: Date;

    @IsNotEmpty()
    @IsString()
    userId: string;
}

export class UpdateEducationDto {
    @IsEmpty()
    @IsString()
    institution?: string;

    @IsEmpty()
    @IsString()
    title?: string;

    @IsEmpty()
    @IsString()
    area?: string;

    @IsEmpty()
    @IsBoolean()
    status?: boolean;

    @IsEmpty()
    @IsString()
    degreeId?: string;

    @IsEmpty()
    @IsDate()
    startDate?: Date;

    @IsEmpty()
    @IsDate()
    endDate?: Date;
}