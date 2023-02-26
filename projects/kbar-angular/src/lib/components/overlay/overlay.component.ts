import { Component, Input, Output, EventEmitter } from '@angular/core';
import { KbarAngularService } from '../../kbar-angular.service';

@Component({
  selector: 'kbar-overlay',
  styleUrls: ['./overlay.component.css'],
  template: `
    <div
      (click)="onClick($event)"
      [class.overlay]="!unstyled"
      [style]="style"
      [ngStyle]="ngStyle"
    >
      <ng-content></ng-content>
    </div>
  `,
})
export class OverlayComponent {
  @Input() unstyled?: boolean | undefined | null = false;
  @Input() style: any = {};
  @Input() ngStyle: { [klass: string]: any } = {};
  @Output() handleClick: EventEmitter<MouseEvent> = new EventEmitter();

  constructor(private _kbarAngularService: KbarAngularService) {}

  onClick(event: MouseEvent): void {
    this._kbarAngularService.handleClose();

    this.handleClick.emit(event);
  }
}
