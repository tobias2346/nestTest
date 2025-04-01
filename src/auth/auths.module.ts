import { Module } from '@nestjs/common';
import { AuthsService } from './auths.service';
import { AuthsController } from './auths.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Auths, AuthsSchema } from './schema/auth.schema';

@Module({
  imports : [MongooseModule.forFeature([{name : Auths.name, schema : AuthsSchema}])],
  controllers: [AuthsController],
  providers: [AuthsService],
})
export class AuthsModule {}
