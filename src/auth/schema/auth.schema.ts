import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Auths {
    @Prop()
    name : string

    @Prop()
    password : string

    @Prop()
    email : string

}

export const AuthsSchema = SchemaFactory.createForClass(Auths)
