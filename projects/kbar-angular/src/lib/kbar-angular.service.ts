import { Injectable } from '@angular/core';
import { Action } from './types/actions';
import getMatches from './functions/matches';
import { Theme } from './types';
import hasChildren from './functions/hasChildren';

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
  focusedIndex: number = 0;

  constructor() {}

  handleClose(): void {
    this.isOpen = false;
    this.query = ''; // reset query
    this.results = this.actions; // reset results
    this.submenu = null; // reset submenu
    this.focusedIndex = 0; // reset focused index
  }

  handleOpen(): void {
    this.isOpen = true;
  }

  handleSearch(query: string): void {
    this.query = query;

    const filtered = this.actions.filter((action) => {
      if (!this.submenu && this.query.length > 0) return true;

      if (this.submenu !== null) return action.parent === this.submenu;

      return action.parent == null || action.parent === '';
    });

    this.results = getMatches(query, filtered);
  }

  updateResults(): void {
    this.handleSearch(this.query);
  }

  handlePerform = (action: Action, event: Event): void => {
    if (typeof action?.perform === 'function') action.perform(event);

    const isParent = hasChildren(action.id, this.actions);

    if (isParent) {
      this.submenu = action.id;
      this.query = '';
      this.focusedIndex = 0;

      // only close kbar if explicitly specified
      if (action.closeOnSelect === true) {
        console.warn(
          'Element has children, are you sure you want to close the kbar?'
        );

        this.handleClose();
      }
    }
    // Close the kbar if the action doesn't specify otherwise
    else if (action.closeOnSelect !== false) {
      this.handleClose();
    }
  };
}
