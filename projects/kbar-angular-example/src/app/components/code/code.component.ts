import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  styleUrls: ['./code.component.scss'],
  template: `
    <pre>
      <code>
        {{ code }}
      </code>
    </pre>
  `,
})
export class CodeComponent {
  @Input() code?: string;
}
