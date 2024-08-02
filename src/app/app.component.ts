import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './constants/users';
import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  users = DUMMY_USERS;
  selectedId!: string;
 
  get selectedUser(){
    return this.users.find((user) => user.id === this.selectedId);//ANOTAÇÃO o simbolo ! pode ser implementado a fim de garantir ao TypeScript que o retorno nunca será undefined
  }

  onSelectUser(id: string){  
    this.selectedId = id;
  }


}
