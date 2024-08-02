import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user.model';


@Component({
  selector: 'app-user',
  // standalone: true,
  // imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})


export class UserComponent {  
  @Input({required: true}) user!: User //ANOTAÇÃO O Simbolo ! é para o typescript saber que este valor está sendo assignado em um lugar que ele não consegue ver (este arquivo)
  @Input({required: true}) selected!: boolean
  @Output() select = new EventEmitter<string>();


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
   this.select.emit(this.user.id);
  }
}
 