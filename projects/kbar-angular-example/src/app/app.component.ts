import { Component, HostListener } from '@angular/core';
import { Actions } from 'kbar-angular';

type Theme = 'dark' | 'light';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  _theme: Theme = 'light';
  counter: number = 0;

  @HostListener('window:storage', ['$event'])
  onStorageChange() {
    this.theme = this.theme;
  }

  constructor() {
    this.theme = this.theme;
  }

  get theme(): Theme {
    const raw = localStorage.getItem('theme');

    return raw === 'dark' ? 'dark' : 'light';
  }

  set theme(theme: Theme) {
    this._theme = theme;
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
          this.theme = 'light';
        },
        parent: 'theme-menu',
      },
      {
        id: 'dark-mode',
        name: 'Dark mode',
        keywords: ['dark', 'mode'],
        perform: () => {
          this.theme = 'dark';
        },
        parent: 'theme-menu',
      },
    ];
  }
}
