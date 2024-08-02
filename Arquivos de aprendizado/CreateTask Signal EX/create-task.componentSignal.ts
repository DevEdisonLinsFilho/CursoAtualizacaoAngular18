import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-task.componentSignal.html',  
})
export class CreateTaskComponent {
  @Output() creatingTask = new EventEmitter<boolean>();
  enteredTitle = signal('');
  enteredSummary = signal('');
  enteredDate = signal('');



  onCancellingAddTask(){
    this.creatingTask.emit(false);
  }



}
