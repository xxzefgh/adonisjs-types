declare namespace Adonis {
  class Env {
    constructor(appRoot: string)
    load(filePath: string, overwrite: boolean, encoding: string): void
    getEnvPath(): string
    get(key: string, defaultValue: any): any
    set(key: string, value: any): void
  }

  class Config {
    constructor(configPath: string)
    syncWithFileSystem(): void
    get(key: string, defaultValue: any): any
    merge(key: string, defaultValues: Object, customizer?: Function): Object
    set(key: string, value: any): void
  }

  class Route {}
  class BriskRoute {}
  class RouteGroup {}
  class RouteResource {}
  class RouteManager {
    route(
      route: string,
      handler: Function | string,
      verbs: Array<string>
    ): Route
    get(route: string, handler: Function | string): Route
    post(route: string, handler: Function | string): Route
    put(route: string, handler: Function | string): Route
    patch(route: string, handler: Function | string): Route
    delete(route: string, handler: Function | string): Route
    any(route: string, handler: Function | string): Route
    on(route: string): BriskRoute
    match(url: string, verb: string, host?: string): Object | null
    group(name: string, callback: Function): RouteGroup
    resource(resouce: string, controller: string): RouteResource
    list(): Array<any>
    url(
      routeNameOrHandler: string,
      data?: Object,
      options?: string
    ): string | null
  }
}

declare function use(path: 'Env'): Adonis.Env
declare function use(path: 'Config'): Adonis.Config
declare function use(path: 'Route'): Adonis.RouteManager