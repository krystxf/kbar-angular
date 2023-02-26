import { Component, Input } from '@angular/core';
import { KbarAngularService } from '../../kbar-angular.service';
import { Action } from '../../types/actions';
import hasChildren from '../../functions/hasChildren';

@Component({
  selector: 'kbar-results',
  styleUrls: ['./results.component.css'],
  template: `
    <ul>
      <li
        *ngFor="let item of kbarServiceInstance.results"
        (click)="handlePerform(item, $event)"
        [class.item]="!unstyled"
        [style]="style"
        [ngStyle]="ngStyle"
      >
        {{ item.name }}
      </li>
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

  handlePerform = (action: Action, event: MouseEvent): void => {
    if (typeof action?.perform === 'function') action.perform(event);

    const isParent = hasChildren(action.id, this._kbarService.actions);

    if (isParent) {
      this._kbarService.submenu = action.id;
      this._kbarService.query = '';

      // only close kbar if explicitly specified
      if (action.closeOnSelect === true) {
        console.warn(
          'Element has children, are you sure you want to close the kbar?'
        );

        this._kbarService.handleClose();
      }
    }
    // Close the kbar if the action doesn't specify otherwise
    else if (action.closeOnSelect !== false) {
      this._kbarService.handleClose();
    }
  };
}
