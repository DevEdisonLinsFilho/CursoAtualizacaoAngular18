import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";


@NgModule({
    declarations:[CardComponent],
    //ANOTAÇÃO o exports serve para declarar qualquer component deste modulo que deve ser compartilhado com os components de um modulo que importa este.
    //ANOTAÇÃO o exemplo disso, meu SharedModule é importado no AppModule, então o que estiver no exports será compartilhado com todos os components lá declarados (declarations).
    exports: [CardComponent]
})

export class SharedModule{

}