### Installation
1. Install `adonis4-types` package:
`npm i --save adonis4-types`
2. Add following `tsconfig.json` file in your project root:
```json
{
  "compilerOptions": {
    "allowJs": true,
    "moduleResolution": "node"
  },
  "files": [
    "node_modules/adonis4-types/index.d.ts"
  ],
  "include": [
    "./**/*.js"
  ],
  "exclude": [
    "node_modules"
  ]
}
```
This is a minimal required configuration for types to work. [You can tweak it further](http://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
