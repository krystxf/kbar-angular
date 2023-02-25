import { Component } from '@angular/core';

@Component({
  selector: 'kbar-positioner',
  styleUrls: ['./positioner.component.css'],
  template: `
    <section class="positioner">
      <ng-content></ng-content>
    </section>
  `,
})
export class PositionerComponent {}
