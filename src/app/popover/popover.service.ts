import { Injectable, Injector } from "@angular/core";
import { Overlay, PositionStrategy, ConnectionPositionPair, OverlayConfig } from "@angular/cdk/overlay";
import { PopoverRef, PopoverContent } from "./popover-ref";
import { PortalInjector, ComponentPortal } from "@angular/cdk/portal";
import { PopoverComponent } from "./popover.component";

export type PopoverParams<T> = {
  origin: HTMLElement;
  content: PopoverContent;
  data?: T;
  width?: string | number;
  height: string | number;
}

@Injectable({ providedIn: 'root' })
export class Popover {

  constructor(private overlay: Overlay, private injector: Injector) { }

  open<T>({ origin, content, data, width, height }: PopoverParams<T>) {
    const overlayRef = this.overlay.create(this.getOverlayConfig({ origin, width, height }));
    const popoverRef = new PopoverRef<T>(overlayRef, content, data);

    const injector = this.createInjector(popoverRef, this.injector);
    overlayRef.attach(new ComponentPortal(PopoverComponent, null, injector));

    return popoverRef;
  }

  createInjector(popoverRef: PopoverRef, injector: Injector) {
    const tokens = new WeakMap([[PopoverRef, popoverRef]]);
    return new PortalInjector(injector, tokens);
  }

  private getOverlayConfig({ origin, width, height }): OverlayConfig {
    return new OverlayConfig({
      width,
      height,
      hasBackdrop: true,
      backdropClass: 'popover-backdrop',
      positionStrategy: this.getOverlayPosition(origin),
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }

  private getOverlayPosition(origin: HTMLElement): PositionStrategy {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(origin)
      .withPositions(this.getPositions())
      .withPush(false);

    return positionStrategy;
  }

  private getPositions(): ConnectionPositionPair[] {
    return [
      {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      },
      {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
      },
    ];
  }

}
