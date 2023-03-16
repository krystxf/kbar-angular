import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code',
  template: `
    <pre>
      <code class="font-mono block px-2 py-1 rounded-md text-base bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
        {{ code }}
      </code>
    </pre>
  `,
})
export class CodeComponent {
  @Input() code?: string;
}
