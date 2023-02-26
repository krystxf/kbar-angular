import { Component, Input } from '@angular/core';
import { KbarAngularService } from '../../kbar-angular.service';
import { Action } from '../../types/actions';
import hasChildren from '../../functions/hasChildren';

@Component({
  selector: 'kbar-results',
  styleUrls: ['./results.component.css'],
  template: `
    <ul>
      <kbar-result
        *ngFor="let action of kbarServiceInstance.results"
        [action]="action"
        [class.item]="!unstyled"
        [style]="style"
        [ngStyle]="ngStyle"
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
