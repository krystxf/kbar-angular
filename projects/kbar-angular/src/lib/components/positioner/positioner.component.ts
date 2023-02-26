import { Component, Input } from '@angular/core';

@Component({
  selector: 'kbar-positioner',
  styleUrls: ['./positioner.component.css'],
  template: `
    <section
      [class.positioner]="!unstyled"
      [class.animated]="animated && !unstyled"
      [style]="style"
      [ngStyle]="ngStyle"
    >
      <ng-content></ng-content>
    </section>
  `,
})
export class PositionerComponent {
  @Input() unstyled?: boolean | undefined | null = false;
  @Input() animated?: boolean = true;
  @Input() style: any = {};
  @Input() ngStyle: { [klass: string]: any } = {};
}
