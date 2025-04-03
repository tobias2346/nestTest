import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { FeedbacksModule } from './feedbacks/feedbacks.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Carga variables de entorno automáticamente
    MongooseModule.forRoot(process.env.MONGODB_URL), 
    FeedbacksModule,
  ],
  providers: [AppService],
})
export class AppModule {}
