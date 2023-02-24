import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'kbar',
  templateUrl: './kbar.component.html',
  styleUrls: ['./kbar.component.css'],
})
export class KbarComponent {
  isOpen = true;

  @HostListener('document:keydown.control.k', ['$event'])
  onCtrlK(event: KeyboardEvent) {
    if (this.isOpen) return;

    event.preventDefault();
    this.handleOpen();

    return false;
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEsc(event: KeyboardEvent) {
    if (!this.isOpen) return;

    event.preventDefault();
    this.handleClose();
  }

  handleClose() {
    if (!this.isOpen) return;

    this.isOpen = false;
  }

  handleOpen() {
    if (this.isOpen) return;

    this.isOpen = true;
  }
}
