import { Component } from '@angular/core';
import { DUMMY_USERS } from './constants/users';


@Component({
  selector: 'app-root',
  // standalone: true, //ANOTAÇÃO isso e o imports se aplicam quando não utilizamos modulos - apenas as versões mais recentes do angular permitem isso - por isso é comum ver modulos em projetos
  // imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
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
