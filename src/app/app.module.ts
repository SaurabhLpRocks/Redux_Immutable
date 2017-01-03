import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChangeDetectionComponentModule } from './component/change-detection/change-detection.module';

@NgModule({
  declarations: [
    AppComponent
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
