import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TasksService } from './tasks.service';
import { CreateTask } from '../models/create-task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,  
  imports: [TaskComponent, CreateTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;//ANOTAÇÃO o simbolo ? indica que o valor pode ser undefined  
  //ANOTAÇÃO a injeção de dependencia é feita de forma automatica quando adicionamos ao conturtor, sem necessidade de registrar isso ou configurar em lugar nenhum, apenas criar a classe e adicionar a um construtor.
  //ANOTAÇÃO adicionando o private no parametro do construtor, não precisamos criar uma propriedade no nosso compontente.
  constructor(private tasksService: TasksService){}
  
  creatingTask = false;

  onAddTaskOpenModal(){   
    this.creatingTask = true;    
  }
  
  onAddTaskCloseModal(cancel: boolean){
    this.creatingTask = cancel;
  }
  
  get selectedUserTasks(){
    return this.tasksService.getSelectedUserTasks(this.userId);
  }

  onAddTask(addedTask: CreateTask){
      this.tasksService.addTask(addedTask, this.userId);
      this.creatingTask = false;
  }
  
}
