import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent]
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
 