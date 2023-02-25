import { Injectable } from '@angular/core';
import { Action } from './types/actions';
import getMatches from './functions/matches';

@Injectable({
  providedIn: 'root',
})
export class KbarAngularService {
  isOpen: boolean = false;
  actions: Action[] = [];
  results: Action[] = [];
  query: string = '';

  handleClose(): void {
    this.isOpen = false;
    this.query = ''; // reset query
    this.results = this.actions; // reset results
  }

  handleOpen(): void {
    this.isOpen = true;
  }

  handleSearch(query: string): void {
    this.query = query;

    this.results = getMatches(query, this.actions);
  }
}
