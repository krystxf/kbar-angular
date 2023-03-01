import { Component, Input } from '@angular/core';
import { KbarAngularService } from '../../kbar-angular.service';
import { Group } from '../../types';
import groupResults from '../../functions/groupResults';

@Component({
  selector: 'kbar-results',
  styleUrls: ['./results.component.css'],
  template: `
    <div>
      <div *ngFor="let group of groupedActions; let groupIndex = index">
        <div *ngIf="group.name" class="group-name">
          {{ group.name }}
        </div>
        <kbar-result
          *ngFor="let action of group.actions; let i = index"
          [action]="action"
          [class.item]="!unstyled"
          [style]="style"
          [ngStyle]="ngStyle"
          [active]="kbarServiceInstance.focusedIndex === action.index"
        ></kbar-result>
      </div>
    </div>
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

  get groupedActions(): Group[] {
    console.log(groupResults(this.kbarServiceInstance.results));

    return groupResults(this.kbarServiceInstance.results);
  }
}
