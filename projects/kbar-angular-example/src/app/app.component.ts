import { Component } from '@angular/core';
import { Actions } from 'kbar-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  darkMode: boolean = false;

  counter: number = 0;

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
          this.darkMode = false;
        },
        parent: 'theme-menu',
      },
      {
        id: 'dark-mode',
        name: 'Dark mode',
        keywords: ['dark', 'mode'],
        perform: () => {
          this.darkMode = true;
        },
        parent: 'theme-menu',
      },
    ];
  }
}
