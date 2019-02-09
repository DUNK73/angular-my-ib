import { Component, TemplateRef } from '@angular/core';
import { Popover, PopoverParams } from './popover/popover.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  title = 'angular-my-lib';

  constructor(private popper: Popover) { }


  show(content: TemplateRef<any>, origin: HTMLElement) {
    const popoverRef = this.popper.open<any>({
      content,
      origin,
      data: 'TEST'
    } as PopoverParams<string>);

    popoverRef.afterClosed$.subscribe(res => {
      console.log(res);
    });
  }
}
