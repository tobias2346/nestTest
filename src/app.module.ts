import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TaskController } from './task/task.controller';

@Module({
  imports: [UsersModule, AuthModule, TaskModule, StudentsModule,
    MongooseModule.forRoot('mongodb+srv://admin:12345@cluster0.sdxugon.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  ],
  controllers: [AuthController, UsersController, TaskController],
  providers: [AuthService, UsersService, TaskService, AppService]
})

export class AppModule { }
