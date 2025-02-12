import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {

    constructor(){}
    
    private users = [];

    create(email: string, password: string) {
        this.users.push({email, password, id : this.users.length})

        return `Bienvenido ${email}`
    }

}
