import { Component, Input } from '@angular/core';
import { KbarAngularService } from '../../kbar-angular.service';

@Component({
  selector: 'kbar-results',
  styleUrls: ['./results.component.css'],
  template: `
    <ul>
      <kbar-result
        *ngFor="let action of kbarServiceInstance.results; let i = index"
        [action]="action"
        [class.item]="!unstyled"
        [style]="style"
        [ngStyle]="ngStyle"
        [index]="i"
      ></kbar-result>
    </ul>
  `,
})
export class ResultsComponent {
  @Input() unstyled?: boolean | undefined | null = false;
  @Input() style: any = {};
  @Input() ngStyle: { [klass: string]: any } = {};

  constructor(private _kbarService: KbarAngularService) {}

  get kbarServiceInstance(): KbarAngularService {
    return this._kbarService;
  }
}
