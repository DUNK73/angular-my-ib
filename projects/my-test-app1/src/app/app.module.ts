import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyUiLibModule } from 'projects/my-ui-lib/src/public_api';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MyUiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
