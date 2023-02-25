import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kbar-angular-example';

  actions = [
    {
      name: 'Home',
      keywords: ['home'],
      perform: () => {
        document.location.href = '/';
      },
    },
    {
      name: 'Console.log',
      keywords: ['log', 'console'],
      perform: () => {
        console.log('Hello world!');
      },
    },
  ];
}
