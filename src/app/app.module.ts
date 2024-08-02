import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";


@NgModule({
    declarations: 
    [   AppComponent, //ANOTAÇÃO Caso o Component não seja mais standAlone, vem para os declarations
        HeaderComponent,
        UserComponent
    ],
    bootstrap: [AppComponent],//ANOTAÇÃO a propriedade bootstrap só é aplicada a o root module o mesmo referido no bootstrap do main
    
    //ANOTAÇÃO Neste caso, os imports são Modulos ou Components StandAlone. É um jeito de mesclar esturutra de Modulos com estrutura de components standalone.
    //ANOTAÇÃO BrowserModule é um modulo fornecido pelo Angular que sempre precisa ser importado neste tipo de estrutura. Ele engloba diversos componentes por exemplo DatePipe.E deve ser importado apenas no modulo root
    imports: [BrowserModule, SharedModule, TasksModule]
})                                                                  

export class AppModule {
//ANOTAÇÃO Ao alterar coisas no nivel de componentes e modulos, rodar o "npm start" novamente, alguns erros persistentes tendem a sumir
}