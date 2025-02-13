import { Body, Controller, Delete, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './dtos/task-dtos';

@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService) { }

    @Post()
    @UsePipes( new ValidationPipe())
    createTask(@Body() body: TaskDto) {
        return this.taskService.create(body.task)
    }

    @Get("/get/:id")
    getTask(@Param("id") id: string) {
        return this.taskService.get(parseInt(id))
    }

    @Get("/getAll")
    getAllTasks() {
        return this.taskService.getAll()
    }

    @Delete("/:id")
    deleteTask(@Param("id") id: string) {
        return this.taskService.delete(parseInt(id))
    }

}
