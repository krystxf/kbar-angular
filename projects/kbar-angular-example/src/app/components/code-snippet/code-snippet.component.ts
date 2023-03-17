import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-snippet',
  template: `
    <pre
      class="py-3"
    ><code class="font-mono block px-6 py-4 rounded-md text-base bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300">{{ code }}</code></pre>
  `,
})
export class CodeComponent {
  @Input() code?: string;
}
