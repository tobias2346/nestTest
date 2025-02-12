import { IsString } from "class-validator"

export class TaskDto {

    @IsString()
    task : string

}