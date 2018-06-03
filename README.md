### Installation
1. Install `adonisjs-types` package:

    `npm i --save-dev adonisjs-types`
2. Add following `tsconfig.json` file in your project root:

    ```json
    {
      "compilerOptions": {
        "moduleResolution": "node",
        "target": "es5",
        "lib": [
          "es2015"
        ],
        "typeRoots": [
          "./node_modules/@types",
          "./node_modules/adonisjs-types"
        ],
        "sourceMap": true
      }
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

One practice is to keep using `.js` files (e.g. routes, migrations, models), provided by Adonis Framework.
That way you can just hope your IDE is smart enough to correctly handle TS code.
However, in order to utilise full TypeScript power, those `.js` files should be transformed
(well, just renamed) to `.ts` files. Then, all .ts files may be compiled just by running `tsc`
command (TypeScript must be already installed). You then can simplify your `tsconfig.json` by removing
 `"allowJs": true,` line.
