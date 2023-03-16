import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  darkMode: boolean = false;

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
