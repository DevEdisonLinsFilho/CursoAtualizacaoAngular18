import { Injectable } from "@angular/core";
import { DUMMY_TASKS } from "../constants/tasks"
import { type CreateTask } from "../models/create-task.model"; //ANOTAÇÃO type adicionado para diferenciar meus models dos demais imports

@Injectable({providedIn: 'root'})//ANOTAÇÃO Aqui é declarado que esta classe será usada para injeção de dependencia - root é o parametro que faz ser injetavel no projeto inteiro
export class TasksService {

    private tasks = DUMMY_TASKS

    constructor(){
      const tasks = localStorage.getItem('tasks');
  
      if (tasks) {
        this.tasks = JSON.parse(tasks);
      }
    }

    getSelectedUserTasks(userId: string){    
        return this.tasks.filter((task) => task.userId === userId);
      }
    
    addTask(addedTask: CreateTask, userId: string){
        this.tasks.unshift({//ANOTAÇÃO unshift adiciona ao inicio do array
          id: new Date().getTime().toString(), //apenas para o exemplo do projeto
          userId: userId,
          title: addedTask.title,
          summary: addedTask.summary,
          dueDate: addedTask.date
        });
        this.commitTasks();
    }

    removeTask(taskId: string){
        this.tasks = this.tasks.filter((task) => task.id != taskId);
        this.commitTasks();
    }

    private commitTasks(){
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}