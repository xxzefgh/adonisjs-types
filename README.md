### Installation
1. Install `adonisjs-types` package:

    `npm i --save-dev adonisjs-types`
2. Add following `tsconfig.json` file in your project root:

    ```json
    {
      "compilerOptions": {
        "allowJs": true,
        "moduleResolution": "node",
        "lib": [
          "es2015"
        ]
      },
      "files": [
        "node_modules/adonisjs-types/index.d.ts"
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

### Usage
Types are provided through `use` method, for example: `const Env = use('Env')` will be correctly typed. If you want to get intellisense on controller methods, jsDoc will help:
```js
class WelcomeController {
  /**
   * @param {Adonis.Http.Context} ctx
   */
  hello(ctx) {
    //
  }
}

// Or, if you want destructuring:

class WelcomeController {
  hello(/** @type Adonis.Http.Context */ { request, response }) {
    //
  }
}
```
