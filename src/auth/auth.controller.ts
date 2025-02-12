import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register-dtos';

@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService){}

    @Post("/register")
    register(@Body() body : RegisterDto){
       return this.authService.create( body.email, body.password)
    }

}
