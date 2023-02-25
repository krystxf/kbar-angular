import { Component, HostListener } from '@angular/core';
import { KbarAngularService } from '../kbar-angular.service';

@Component({
  selector: 'kbar',
  templateUrl: './kbar.component.html',
  styleUrls: ['./kbar.component.css'],
})
export class KbarComponent {
  constructor(private _kbarAngularService: KbarAngularService) {}

  get kbarServiceInstance(): KbarAngularService {
    return this._kbarAngularService;
  }

  @HostListener('document:keydown.control.k', ['$event'])
  onCtrlK(event: KeyboardEvent) {
    if (this._kbarAngularService.isOpen) return;

    event.preventDefault();
    this._kbarAngularService.handleOpen();
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEsc(event: KeyboardEvent) {
    if (!this._kbarAngularService.isOpen) return;

    event.preventDefault();
    this._kbarAngularService.handleClose();
  }
}
