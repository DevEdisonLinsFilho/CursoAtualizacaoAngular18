import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../../src/app/constants/users'

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',  
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  
  //ANOTAÇÃO Computed permite que manipulemos o valor do signal, neste caso concatenando 
  //ANOTAÇÃO o avatar com o resto do path dele para funcionar no SRC do <img>
  imagePath = computed (() => 'assets/users/' + this.selectedUser().avatar)
  
  //ANOTAÇÃO sem signal estava assim:
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    //ANOTAÇÃO Com signal, usamos o set para colocar um novo valor a propriedade
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //ANOTAÇÃO Sem signal estava assim:
    //ANOTAÇÃO this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
 