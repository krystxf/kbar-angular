import { Component, HostListener } from '@angular/core';
import { Actions } from 'kbar-angular';

type Theme = 'dark' | 'light';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>

    <kbar [actions]="actions">
      <kbar-overlay></kbar-overlay>

      <kbar-positioner>
        <kbar-search placeholder="Type command or search..."></kbar-search>
        <kbar-results></kbar-results>
      </kbar-positioner>
    </kbar>
  `,
})
export class AppComponent {
  counter: number = 0;

  @HostListener('window:storage', ['$event'])
  onStorageChange() {
    this.setTheme(this.getTheme());
  }

  constructor() {
    this.setTheme(this.getTheme());
  }

  getTheme(): Theme {
    const raw = localStorage.getItem('theme');

    return raw === 'dark' ? 'dark' : 'light';
  }

  setTheme(theme: Theme) {
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  get actions(): Actions {
    return [
      {
        id: 'github',
        name: 'Go to Github',
        keywords: [
          'github',
          'repo',
          'repository',
          'source',
          'code',
          'documentation',
        ],
        perform: () => {
          window.open('https://github.com/krystxf/kbar-angular');
        },
      },
      {
        id: 'hello',
        name: 'Hello world!',
        keywords: ['alert'],
        perform: () => {
          alert('Hello world!');
        },
      },
      {
        id: 'counter',
        name: `Counter: ${this.counter} - Click to increment ${
          this.counter > 0 ? '(reactivity works!)' : ''
        }`,
        keywords: ['plus', 'add'],
        perform: () => {
          this.counter++;
        },
        closeOnSelect: false,
      },
      {
        id: 'theme-menu',
        name: 'Change theme',
        keywords: ['dark', 'light', 'mode'],
        group: 'preferences',
      },
      {
        id: 'light-mode',
        name: 'Light mode',
        keywords: ['light', 'mode'],
        perform: () => {
          this.setTheme('light');
        },
        parent: 'theme-menu',
      },
      {
        id: 'dark-mode',
        name: 'Dark mode',
        keywords: ['dark', 'mode'],
        perform: () => {
          this.setTheme('dark');
        },
        parent: 'theme-menu',
      },
    ];
  }
}
