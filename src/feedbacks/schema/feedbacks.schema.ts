import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class FeedBacks {
    @Prop()
    name : string

    @Prop()
    email : string

    @Prop()
    type : string

    @Prop()
    message : string

    @Prop()
    date : string

}

export const FeedBacksSchema = SchemaFactory.createForClass(FeedBacks)