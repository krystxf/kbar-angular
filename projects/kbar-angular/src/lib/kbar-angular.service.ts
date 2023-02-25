import { Injectable } from '@angular/core';
import { Action } from './types/actions';

@Injectable({
  providedIn: 'root',
})
export class KbarAngularService {
  isOpen: boolean = true;
  actions: Action[] = [];
  query: string = '';

  constructor() {}

  handleClose() {
    if (!this.isOpen) return;

    this.isOpen = false;
    this.query = ''; // reset query
  }

  handleOpen() {
    if (this.isOpen) return;

    this.isOpen = true;
  }
}
