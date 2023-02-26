import { Injectable } from '@angular/core';
import { Action } from './types/actions';
import getMatches from './functions/matches';
import { Theme } from './types';

@Injectable({
  providedIn: 'root',
})
export class KbarAngularService {
  isOpen: boolean = false;
  actions: Action[] = [];
  results: Action[] = [];
  query: string = '';
  theme: Theme = {};
  submenu: string | null = null;

  constructor() {}

  handleClose(): void {
    this.isOpen = false;
    this.query = ''; // reset query
    this.results = this.actions; // reset results
    this.submenu = null; // reset submenu
  }

  handleOpen(): void {
    this.isOpen = true;
  }

  handleSearch(query: string): void {
    this.query = query;

    const filtered = this.actions.filter((action) => {
      // If there is no submenu, return all actions with no parent
      if (this.submenu === null)
        return action.parent == null || action.parent === '';
      // Else return all actions with the current submenu as parent
      else return action.parent === this.submenu;
    });

    this.results = getMatches(query, filtered);
  }

  updateResults(): void {
    this.handleSearch(this.query);
  }
}
