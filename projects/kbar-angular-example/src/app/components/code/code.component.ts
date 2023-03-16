import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
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
