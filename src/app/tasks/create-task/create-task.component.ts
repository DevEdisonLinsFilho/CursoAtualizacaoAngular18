import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() closeAddTask = new EventEmitter<boolean>();
  private taskService = inject(TasksService); //ANOTAÇÃO outra forma de injetar o serviço no componente.

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';



  onCancellingAddTask(){
    this.closeAddTask.emit(false);
  }

  onSubmit(){
    let createdTask = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    }

    this.taskService.addTask(createdTask, this.userId);
    this.closeAddTask.emit(false);
  }

}
