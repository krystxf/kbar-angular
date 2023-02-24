import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kbar-overlay',
  styleUrls: ['./overlay.component.css'],
  template: `
    <div class="overlay" (click)="onClick($event)">
      <ng-content></ng-content>
    </div>
  `,
})
export class OverlayComponent {
  @Output() handleClick: EventEmitter<MouseEvent> = new EventEmitter();

  onClick(event: MouseEvent) {
    this.handleClick.emit(event);
  }
}
