import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterDto } from 'src/auth/dtos/register-dtos';

@Controller('user')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Post("/register")
    register(@Body() body: RegisterDto) {
        return this.userService.create(body.email, body.password)
    }

    @Get('/getUser/:id')
    getUserById(@Param('id') id: string) {
        return this.userService.getUserById(parseInt(id))
    }

}

