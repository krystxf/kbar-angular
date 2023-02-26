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
        name: 'Go to Github',
        keywords: [
          'github',
          'repo',
          'repository',
          'source',
          'code',
          'documentation',
        ],
        perform: () => window.open('https://github.com/krystxf/kbar-angular'),
      },
      {
        name: 'Light mode',
        keywords: ['light', 'mode'],
        perform: () => (this.darkMode = false),
        closeOnSelect: false,
      },
      {
        name: 'Dark mode',
        keywords: ['dark', 'mode'],
        perform: () => (this.darkMode = true),
        closeOnSelect: false,
      },
    ];
  }

  CLASS_EXAMPLE = `
  actions = [
    {
      name: "Home",
      keywords: ["home"],
      perform: () => {
        document.location.href = "/";
      },
    },
    {
      name: "Console.log",
      keywords: ["log", "console"],
      perform: () => {
        console.log("Hello world!");
      },
    },
  ]; 
  `;

  TEMPLATE_EXAMPLE = `
  <kbar [actions]="actions">
    <kbar-overlay />

    <kbar-positioner>
      <kbar-search></kbar-search>
      <kbar-results></kbar-results>
    </kbar-positioner>
  </kbar>
  `;
}
