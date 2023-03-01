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

  // ctrl + k
  @HostListener('document:keydown.control.k', ['$event'])
  onCtrlK(event: KeyboardEvent): void | boolean {
    event.preventDefault();

    if (this._kbarService.isOpen) {
      this._kbarService.handleClose();
    } else {
      this._kbarService.handleOpen();
    }
  }

  // ↑
  @HostListener('document:keydown.arrowup', ['$event'])
  onUp(event: KeyboardEvent): void | boolean {
    if (this._kbarService.focusedIndex === 0) return;

    event.preventDefault();
    this._kbarService.focusedIndex--;
  }

  // ↓
  @HostListener('document:keydown.arrowdown', ['$event'])
  onDown(event: KeyboardEvent): void | boolean {
    if (this._kbarService.focusedIndex === this._kbarService.results.length - 1)
      return;

    event.preventDefault();
    this._kbarService.focusedIndex++;
  }

  // ←
  @HostListener('document:keydown.arrowleft', ['$event'])
  onLeft(event: KeyboardEvent): void | boolean {
    if (!this._kbarService.submenu) return;

    event.preventDefault();
    this._kbarService.submenu = null;
    this._kbarService.focusedIndex = 0;
  }

  // →
  @HostListener('document:keydown.arrowright', ['$event'])
  onRight(event: KeyboardEvent): void | boolean {
    this.handleSelect(event);
  }

  // enter
  @HostListener('document:keydown.enter', ['$event'])
  onEnter(event: KeyboardEvent): void | boolean {
    this.handleSelect(event);
  }

  handleSelect(event: Event): void {
    event.preventDefault();

    const selected = this._kbarService.results[this._kbarService.focusedIndex];

    this._kbarService.handlePerform(selected, event);
  }
}
