import { Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksController } from './feedbacks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedBacks, FeedBacksSchema } from './schema/feedbacks.schema';

@Module({
  imports : [MongooseModule.forFeature([{name : FeedBacks.name, schema : FeedBacksSchema}])],
  controllers: [FeedbacksController],
  providers: [FeedbacksService],
})
export class FeedbacksModule {}
