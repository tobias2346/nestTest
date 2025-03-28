import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './schema/student.schema';

@Module({
  imports : [MongooseModule.forFeature([{name : Student.name, schema : StudentSchema}])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
