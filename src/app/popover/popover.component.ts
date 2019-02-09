import { Component, OnInit, TemplateRef } from "@angular/core";
import { PopoverContent, PopoverRef } from "./popover-ref";


@Component({
  selector: 'app-popover',
  styleUrls: ['popover.component.styl'],
  templateUrl: 'popover.component.html'
})
export class PopoverComponent implements OnInit {
  renderMethod: 'template' | 'component' | 'text' = 'component';
  content: PopoverContent;
  context;

  constructor(private popoverRef: PopoverRef) {
  }

  ngOnInit() {
    this.content = this.popoverRef.content;

    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    } else if (this.content instanceof TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.popoverRef.close.bind(this.popoverRef)
      };
    }
  }
}
