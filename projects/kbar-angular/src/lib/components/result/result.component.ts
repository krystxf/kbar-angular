import { Component, Input } from '@angular/core';
import { KbarAngularService } from '../../kbar-angular.service';
import { Action } from '../../types/actions';

@Component({
  selector: 'kbar-result',
  styleUrls: ['./result.component.css'],
  template: `
    <li
      (click)="kbarServiceInstance.handlePerform(action, $event)"
      [class.item]="!unstyled"
      [style]="style"
      [ngStyle]="ngStyle"
      [class.active]="active"
    >
      <!-- Parent name -->
      <ng-container
        *ngIf="parent && parent.id !== this.kbarServiceInstance.submenu"
      >
        <span class="parent">{{ parent.name }}...</span>
        <span>{{ '›' }}</span>
      </ng-container>

      {{ action.name }}
    </li>
  `,
})
export class ResultComponent {
  @Input() unstyled?: boolean | undefined | null = false;
  @Input() active?: boolean | undefined | null = false;
  @Input() style: any = {};
  @Input() ngStyle: { [klass: string]: any } = {};
  @Input() action!: Action;

  constructor(private _kbarService: KbarAngularService) {}

  get kbarServiceInstance(): KbarAngularService {
    return this._kbarService;
  }

  get parent(): Action | null {
    if (this.action.parent == null || this.action.parent === '') return null;

    return (
      this.kbarServiceInstance.actions.find(
        (action) => action.id === this.action.parent
      ) || null
    );
  }
}
