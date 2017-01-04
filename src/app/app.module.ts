import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChangeDetectionComponentModule } from './component/change-detection/change-detection.module';
import { TodoComponent } from './component/todo/todo.component';
import { TodoStore } from './common/store/todo.store';
import { ListTodoComponent } from './component/list-todo/list-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ListTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, ChangeDetectionComponentModule
  ],
  providers: [TodoStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
