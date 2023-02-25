import { Component, HostListener, Input } from '@angular/core';
import { KbarAngularService } from '../kbar-angular.service';
import { Action } from '../types/actions';

@Component({
  selector: 'kbar',
  templateUrl: './kbar.component.html',
  styleUrls: ['./kbar.component.scss'],
})
export class KbarComponent {
  @Input()
  set actions(actions: Action[]) {
    this._kbarService.actions = actions;
  }

  constructor(private _kbarService: KbarAngularService) {}

  get kbarServiceInstance(): KbarAngularService {
    return this._kbarService;
  }

  @HostListener('document:keydown.control.k', ['$event'])
  onCtrlK(event: KeyboardEvent): void | boolean {
    if (this._kbarService.isOpen) return;

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
