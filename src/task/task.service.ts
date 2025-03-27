import {Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TaskService {

    constructor(){};

    private tasks = []

    create(task: string) {
        this.tasks.push({ task, id: this.tasks.length })
        return 'Tarea agregada'
    }

    get(id: number) {
        const task = this.tasks.find(item => item.id === id)

        if (task)
            return task

        return new NotFoundException(`Tarea no encontrada`)
    }

    getAll() {
        return this.tasks
    }

    delete(id: number) {
        const tasks = this.tasks.filter(item => item.id !== id)
        if (tasks)
            return { message: "Tarea eliminada", tasks }

        return 'Error, no fue posible elimiar la tarea'
    }
    // edit(id : string){
    //     const task = this.tasks.find(item => item.id === id)
    //     if(task)
    //         return task

    //     return 'Error, tarea no encontrada'
    // }
}
