import { Component, Input } from '@angular/core';
import { KbarAngularService } from '../../kbar-angular.service';
import { Action } from '../../types';

@Component({
  selector: 'kbar-search',
  styleUrls: ['./search.component.css'],
  template: `
    <form (submit)="handleSubmit($event)">
      <input
        type="text"
        name="query"
        [placeholder]="placeholder"
        autofocus
        (keyup)="getValue($event)"
        [value]="kbarServiceInstance.query"
        [class.search]="!unstyled"
        [style]="style"
        [ngStyle]="ngStyle"
      />
    </form>
  `,
})
export class SearchComponent {
  @Input() unstyled?: boolean | undefined | null = false;
  @Input() style: any = {};
  @Input() ngStyle: { [klass: string]: any } = {};
  @Input() placeholder?: string | undefined | null = '';

  constructor(private _kbarService: KbarAngularService) {}

  get kbarServiceInstance(): KbarAngularService {
    return this._kbarService;
  }

  getValue(event: KeyboardEvent): void {
    const query = (event.target as HTMLInputElement).value;

    this._kbarService.handleSearch(query);
  }

  handleSubmit(event: SubmitEvent): void {
    event.preventDefault();

    const selected: Action =
      this._kbarService.results[this._kbarService.focusedIndex];

    this._kbarService.handlePerform(selected, event);
  }
}
