import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type StudentChema = HydratedDocument<Student>

@Schema()
export class Student {

  @Prop()
  name: string

  @Prop()
  age: number

  @Prop()
  contry: string

}

export const StudentSchema = SchemaFactory.createForClass(Student)