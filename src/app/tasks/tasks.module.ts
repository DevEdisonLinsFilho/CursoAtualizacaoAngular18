import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { TaskComponent } from "./task/task.component";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TasksComponent } from "./tasks.component";

@NgModule({
    declarations: [
        TasksComponent,
        TaskComponent,
        CreateTaskComponent
    ],
    imports: [SharedModule, CommonModule, FormsModule],
    exports: [TasksComponent]//ANOTAÇÃO o AppComponent só utiliza diretamente o app-tasks, então é o unico que vamos expor aqui. Os utilizados internamente não tem necessidade.
})

export class TasksModule {

}