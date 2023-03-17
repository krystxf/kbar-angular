import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-inline',
  template: `
    <code
      class="mx-1 px-2 py-1 rounded-md text-base bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300"
    >
      {{ code }}</code
    >
  `,
})
export class CodeInlineComponent {
  @Input() code?: string;
}
