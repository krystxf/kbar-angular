import { Component, Input } from '@angular/core';
import { KbarAngularService } from '../../kbar-angular.service';

@Component({
  selector: 'kbar-search',
  styleUrls: ['./search.component.css'],
  template: `
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
}
