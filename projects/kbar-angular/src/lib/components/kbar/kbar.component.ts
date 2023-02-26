import { Component, HostListener, Input, OnInit } from '@angular/core';
import { KbarAngularService } from '../../kbar-angular.service';
import { Action, Theme } from '../../types';

@Component({
  selector: 'kbar',
  template: `
    <ng-template [ngIf]="kbarServiceInstance.isOpen">
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class KbarComponent {
  @Input()
  set actions(actions: Action[]) {
    this._kbarService.actions = actions;
    this._kbarService.updateResults();
  }

  @Input()
  set theme(theme: Theme) {
    this._kbarService.theme = theme;
  }

  constructor(private _kbarService: KbarAngularService) {}

  get kbarServiceInstance(): KbarAngularService {
    return this._kbarService;
  }

  @HostListener('document:keydown.control.k', ['$event'])
  onCtrlK(event: KeyboardEvent): void | boolean {
    event.preventDefault();
    this._kbarService.handleOpen();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEsc(event: KeyboardEvent): void | boolean {
    if (!this._kbarService.isOpen) return;

    event.preventDefault();
    this._kbarService.handleClose();
  }
}
