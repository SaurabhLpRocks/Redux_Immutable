import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChangeDetectionComponentModule } from './component/change-detection/change-detection.module';
import { TodoComponent } from './component/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, ChangeDetectionComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
