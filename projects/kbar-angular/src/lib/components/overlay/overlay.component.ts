import { Component, Output, EventEmitter } from '@angular/core';
import { KbarAngularService } from '../../kbar-angular.service';

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

  constructor(private _kbarAngularService: KbarAngularService) {}

  onClick(event: MouseEvent): void {
    this._kbarAngularService.handleClose();

    this.handleClick.emit(event);
  }
}
