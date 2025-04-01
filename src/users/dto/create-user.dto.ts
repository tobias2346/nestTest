import { IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    name: string
  
    @IsString()
    age: number
  
    @IsString()
    email: string

    @IsString()
    surname: string
}
