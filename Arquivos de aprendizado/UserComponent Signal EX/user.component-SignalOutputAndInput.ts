import { Component, input, output } from '@angular/core';//ANOTAÇÃO input (i minusculo) referente a signal

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',  
})
export class UserComponent {
  avatar = input.required<string>();//ANOTAÇÃO Assim é definido um input com Signal
  name = input.required<string>();//ANOTAÇÃO na chamada do componente, a passagem do parametro é igual
  id = input.required<string>();//ANOTAÇÃO Mas para manipular estes inputs, seguimos as regras do signal

  select = output<string>();//ANOTAÇÃO Output com Signal também é usado como um valor normal na classe que implementa o componente, assim como é recebido no input                               
  
  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(){
   
  }
}
 