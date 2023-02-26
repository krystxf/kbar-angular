# kbar

Angular library inspired by [kbar React library](https://github.com/timc1/kbar)

Provides plug-n-play tool for efficient navigation on your website.

## Features

todo

## Usage

```bash
npm i kbar-angular
```

- Add `KbarAngularModule` to `app.module.ts` to `imports` array

- _to access components service, add `KbarAngularService` to `providers` array_

**component class**

```typescript
actions = [
  {
    name: "Home",
    keywords: ["home"],
    perform: () => {
      document.location.href = "/";
    },
  },
  {
    name: "Console.log",
    keywords: ["log", "console"],
    perform: () => {
      console.log("Hello world!");
    },
  },
];
```

**component template**

```html
<kbar [actions]="actions">
  <kbar-overlay />

  <kbar-positioner>
    <kbar-search></kbar-search>
    <kbar-results></kbar-results>
  </kbar-positioner>
</kbar>
```

## Development

- install dependencies and make sure you're using correct node version
  ```bash
  nvm use
  npm i
  ```
- build library `npm run lib:build`
- build library in watch mode `ng build kbar-angular --watch`
- run the documentation page `npm run example:start`
