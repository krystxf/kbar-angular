import { Component, HostListener } from '@angular/core';
import { Actions } from 'kbar-angular';
import { Router } from '@angular/router';

type Theme = 'dark' | 'light';

@Component({
  selector: 'app-root',
  template: `
    <div class="max-w-5xl mx-auto p-4">
      <router-outlet></router-outlet>
    </div>

    <footer class="pt-8">
      <div class="flex justify-between max-w-xl m-auto pt-8">
        <a href="https://github.com/krystxf/kbar-angular">Source code</a>
        <a href="https://www.npmjs.com/package/kbar-angular">NPM package</a>
        <a href="https://kbar-angular.vercel.app/docs">Docs</a>
        <a href="https://github.com/krystxf/kbar-angular/issues"
          >Create issue / feature request</a
        >
      </div>

      <div class="flex justify-center py-4">
        Made with ❤️ by
        <a href="https://github.com/krystxf" class="px-2">Krystof</a>
      </div>
    </footer>

    <kbar [actions]="actions">
      <kbar-overlay></kbar-overlay>

      <kbar-positioner>
        <kbar-search placeholder="Type command or search..."></kbar-search>
        <kbar-results></kbar-results>
      </kbar-positioner>
    </kbar>
  `,
})
export class AppComponent {
  counter: number = 0;

  @HostListener('window:storage', ['$event'])
  onStorageChange() {
    this.setTheme(this.getTheme());
  }

  constructor(private router: Router) {
    this.setTheme(this.getTheme());
  }

  getTheme(): Theme {
    const raw = localStorage.getItem('theme');

    return raw === 'dark' ? 'dark' : 'light';
  }

  setTheme(theme: Theme) {
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  get actions(): Actions {
    return [
      {
        id: 'github',
        name: 'Go to Github',
        keywords: ['github', 'repo', 'repository', 'source', 'code'],
        perform: () => {
          window.open('https://github.com/krystxf/kbar-angular');
        },
      },
      {
        id: 'home',
        name: 'Home',
        keywords: ['home', 'landing page', 'start'],
        perform: () => {
          this.router.navigate(['/']);
        },
      },
      {
        id: 'docs',
        name: 'Docs',
        keywords: ['docs', 'documentation'],
        perform: () => {
          this.router.navigate(['/docs']);
        },
        group: 'Documentation',
      },
      {
        id: 'search-docs',
        name: 'Search docs',
        keywords: ['search', 'find', 'docs', 'documentation'],
        group: 'Documentation',
      },
      {
        id: 'docs-overview',
        name: 'Introduction',
        keywords: ['overview'],
        parent: 'search-docs',
        group: 'Introduction',
      },
      {
        id: 'docs-getting-started',
        name: 'Getting started',
        keywords: ['getting started', 'start'],
        parent: 'search-docs',
        group: 'Introduction',
      },
      {
        id: 'docs-actions',
        name: 'Actions',
        keywords: ['actions', 'config'],
        parent: 'search-docs',
        group: 'Concepts',
      },
      {
        id: 'docs-shortcuts',
        name: 'Shortcuts',
        keywords: ['shortcuts'],
        parent: 'search-docs',
        group: 'Concepts',
      },
      {
        id: 'docs-shortcuts',
        name: 'Customization',
        keywords: [
          'customization',
          'styling',
          'theme',
          'styles',
          'css',
          'tailwind',
        ],
        parent: 'search-docs',
        group: 'Customization',
      },
      {
        id: 'hello',
        name: 'Hello world!',
        keywords: ['alert'],
        perform: () => {
          alert('Hello world!');
        },
        group: 'Examples',
      },
      {
        id: 'counter',
        name: `Counter: ${this.counter} - Click to increment ${
          this.counter > 0 ? '(reactivity works!)' : ''
        }`,
        keywords: ['plus', 'add'],
        perform: () => {
          this.counter++;
        },
        closeOnSelect: false,
        group: 'Examples',
      },
      {
        id: 'theme-menu',
        name: 'Change theme',
        keywords: ['dark', 'light', 'mode'],
        group: 'preferences',
      },
      {
        id: 'light-mode',
        name: 'Light mode',
        keywords: ['light', 'mode'],
        perform: () => {
          this.setTheme('light');
        },
        parent: 'theme-menu',
      },
      {
        id: 'dark-mode',
        name: 'Dark mode',
        keywords: ['dark', 'mode'],
        perform: () => {
          this.setTheme('dark');
        },
        parent: 'theme-menu',
      },
    ];
  }
}
