import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
