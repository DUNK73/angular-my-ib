import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopoverComponent } from './popover.component';
import { OverlayModule, Overlay } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule
  ],
  declarations: [
    PopoverComponent
  ],
  providers: [
    Overlay
  ],
  entryComponents: [
    PopoverComponent
  ]
})
export class PopoverModule { }
