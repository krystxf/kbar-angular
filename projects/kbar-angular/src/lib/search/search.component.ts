import { Component } from '@angular/core';
import { KbarAngularService } from '../kbar-angular.service';

@Component({
  selector: 'kbar-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private _kbarService: KbarAngularService) {}

  get kbarServiceInstance(): KbarAngularService {
    return this._kbarService;
  }

  getValue(event: KeyboardEvent): void {
    const query = (event.target as HTMLInputElement).value;

    this._kbarService.handleSearch(query);
  }
}
