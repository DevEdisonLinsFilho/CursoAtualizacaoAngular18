import { Component, inject, Input } from '@angular/core';
import { Task } from '../../models/task.model';
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})


export class TaskComponent {
  @Input({required: true}) task!: Task  
  tasksService = inject(TasksService);
  
  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);    
  }

}
