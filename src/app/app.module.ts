import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChangeDetectionComponentModule } from './component/change-detection/change-detection.module';
import { TodoComponent } from './component/todo/todo.component';
import { TodoStore } from './common/store/todo.store';
import { ListTodoComponent } from './component/list-todo/list-todo.component';
import { WTSComponent } from './component/wts/wts.component';
import { RuleComponent } from './component/wts/rule/rule.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ListTodoComponent,
    WTSComponent,
    RuleComponent
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
