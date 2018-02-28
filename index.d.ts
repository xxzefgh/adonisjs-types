declare class Adonis$Env {
  constructor(appRoot: string);
  load(filePath: string, overwrite: boolean, encoding: string): void;
  getEnvPath(): string;
  get(key: string, defaultValue: any): any;
  set(key: string, value: any): void;
}

declare class Adonis$Config {
  constructor(configPath: string);
  syncWithFileSystem(): void;
  get(key: string, defaultValue: any): any;
  merge(key: string, defaultValues: Object, customizer?: Function): Object;
  set(key: string, value: any): void;
}

declare class Adonis$Route {}
declare class Adonis$BriskRoute {}
declare class Adonis$RouteGroup {}
declare class Adonis$RouteResource {}
declare class Adonis$RouteManager {
  route(
    route: string,
    handler: Function | string,
    verbs: Array<string>
  ): Adonis$Route;
  get(route: string, handler: Function | string): Adonis$Route;
  post(route: string, handler: Function | string): Adonis$Route;
  put(route: string, handler: Function | string): Adonis$Route;
  patch(route: string, handler: Function | string): Adonis$Route;
  delete(route: string, handler: Function | string): Adonis$Route;
  any(route: string, handler: Function | string): Adonis$Route;
  on(route: string): Adonis$BriskRoute;
  match(url: string, verb: string, host?: string): Object | null;
  group(name: string, callback: Function): Adonis$RouteGroup;
  resource(resouce: string, controller: string): Adonis$RouteResource;
  list(): Array<any>;
  url(
    routeNameOrHandler: string,
    data?: Object,
    options?: string
  ): string | null;
}

declare function use(path: "Env"): Adonis$Env;
declare function use(path: "Config"): Adonis$Config;
declare function use(path: "Route"): Adonis$RouteManager;
