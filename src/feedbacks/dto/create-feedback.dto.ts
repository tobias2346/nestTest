import { IsInt, IsString } from "class-validator";

export class CreateFeedbackDto {

    @IsString()
    name : string

    @IsString()
    email : string

    @IsString()
    type : string

    @IsString()
    message : string

    @IsString()
    date : string

}
