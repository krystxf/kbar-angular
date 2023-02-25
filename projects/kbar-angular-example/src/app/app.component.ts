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
      perform: () => {
        document.location.href = '/';
      },
    },
    {
      name: 'Console.log',
      perform: () => {
        console.log('Hello world!');
      },
    },
  ];
}
