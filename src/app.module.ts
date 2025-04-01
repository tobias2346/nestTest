import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthsModule } from './auth/auths.module';
import { StudentsModule } from './students/students.module';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Carga variables de entorno automáticamente
    MongooseModule.forRoot(process.env.MONGODB_URL), 
    UsersModule,
    AuthsModule,
    StudentsModule,
  ],
  providers: [AppService],
})
export class AppModule {}
