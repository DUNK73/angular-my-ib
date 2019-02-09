import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyUiLibModule } from 'projects/my-ui-lib/src/lib/my-ui-lib.module';
import { PopoverModule } from './popover/popover.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyUiLibModule,
    PopoverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
