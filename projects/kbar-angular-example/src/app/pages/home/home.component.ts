import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  APP_MODULE_EXAMPLE = `import { KbarModule } from 'kbar-angular';

@NgModule({
  imports: [
      KbarModule
  ]
})`;

  CLASS_EXAMPLE = `import { Actions } from 'kbar-angular';

...

export class AppComponent {
  actions: Actions = [
    {
      id: "home",
      name: "Home",
      keywords: ["home"],
      perform: () => {
        document.location.href = "/";
      },
    },
    {
      id: "test",
      name: "Console.log",
      keywords: ["log", "console"],
      perform: () => {
        console.log("Hello world!");
      },
    },
  ];
}`;

  TEMPLATE_EXAMPLE = `<kbar [actions]="actions">
  <kbar-overlay></kbar-overlay>

  <kbar-positioner>
    <kbar-search></kbar-search>
    <kbar-results></kbar-results>
  </kbar-positioner>
</kbar>`;
}
