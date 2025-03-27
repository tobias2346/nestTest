import { IsInt, IsOptional, IsString } from "class-validator";

export class CreateStudentDto {
  @IsString()
  name: string

  @IsInt()
  age:number;

  @IsOptional()
  country: string
}
