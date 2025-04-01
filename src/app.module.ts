import { Module } from '@nestjs/common';
import { AuthsModule } from './auth/auths.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule, AuthsModule, StudentsModule,
    MongooseModule.forRoot('mongodb+srv://admin:12345@cluster0.sdxugon.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'),
  ],
  providers: [AppService]
})

export class AppModule { }
