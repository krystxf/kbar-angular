import { Component, Input } from '@angular/core';
import { KbarAngularService } from '../../kbar-angular.service';
import { Action } from '../../types/actions';
import hasChildren from '../../functions/hasChildren';

@Component({
  selector: 'kbar-result',
  styleUrls: ['./result.component.css'],
  template: `
    <li
      (click)="handlePerform($event)"
      [class.item]="!unstyled"
      [style]="style"
      [ngStyle]="ngStyle"
    >
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

  handlePerform = (event: MouseEvent): void => {
    if (typeof this.action?.perform === 'function') this.action.perform(event);

    const isParent = hasChildren(this.action.id, this._kbarService.actions);

    if (isParent) {
      this._kbarService.submenu = this.action.id;
      this._kbarService.query = '';

      // only close kbar if explicitly specified
      if (this.action.closeOnSelect === true) {
        console.warn(
          'Element has children, are you sure you want to close the kbar?'
        );

        this._kbarService.handleClose();
      }
    }
    // Close the kbar if the action doesn't specify otherwise
    else if (this.action.closeOnSelect !== false) {
      this._kbarService.handleClose();
    }
  };
}
