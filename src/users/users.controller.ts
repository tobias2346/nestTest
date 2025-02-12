import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RegisterDto } from './dtos/register-dtos';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {

    constructor(private userService: UsersService){}

    @Post('/register')
    register(@Body() body : RegisterDto) {
        return this.userService.create(body.email, body.password)
    }

    @Get('/getUser/:id')
    getUserById(@Param('id') id : string){
        return this.userService.getUserById(parseInt(id))
    }

}

