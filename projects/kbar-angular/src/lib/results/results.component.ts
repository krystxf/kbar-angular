import { Component } from '@angular/core';
import { KbarAngularService } from '../kbar-angular.service';
import { Action } from '../types/actions';

@Component({
  selector: 'kbar-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  constructor(private _kbarService: KbarAngularService) {}

  get kbarServiceInstance(): KbarAngularService {
    return this._kbarService;
  }

  handlePerform = (action: Action, event: MouseEvent): void => {
    action.perform(event);
    this._kbarService.handleClose();
  };
}
