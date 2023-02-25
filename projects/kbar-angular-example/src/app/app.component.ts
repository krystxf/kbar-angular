import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  darkMode: boolean = false;

  actions = [
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
      perform: () =>
        (document.location.href = 'https://github.com/krystxf/kbar-angular'),
    },
    {
      name: 'Light mode',
      keywords: ['light', 'mode'],
      perform: () => (this.darkMode = false),
    },
    {
      name: 'Dark mode',
      keywords: ['dark', 'mode'],
      perform: () => (this.darkMode = true),
    },
  ];

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
