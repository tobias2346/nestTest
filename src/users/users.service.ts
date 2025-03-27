import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    constructor() { }

    private users = [];

    create(email: string, password: string) {
        this.users.push({ email, password, id: this.users.length })
        return `Bienvenido ${email}`
    }

    getUserById(id: number) {
        const user = this.users.find(item => item.id === id)

        if (user)
            return user;

        return 'Usuario no econtrado'
    }

}
