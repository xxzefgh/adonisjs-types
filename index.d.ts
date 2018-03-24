declare namespace Adonis {
    type WorkInProgress = any

    class Config {
        syncWithFileSystem(): void
        get(key: string, defaultValue?: any): any
        merge(key: string, defaultValues: Object, customizer?: Function): Object
        set(key: string, value: any): void
    }

    class Env {
        load(filePath: string, overwrite?: true, encoding?: 'utf-8'): void
        getEnvPath(): string
        get(key: string, defaultValue?: any): any
        set(key: string, value: any): void
    }

    type EventListeners = string | string[] | Function

    class Event {
        getListeners(event: string): Array<string | Function>
        getListenersAny(): Array<string | Function>
        hasListeners(event: string): boolean
        listenersCount(event: string): number
        times(number: number): Event
        on(event: string, listeners: EventListeners): void
        when(event: string, listeners: EventListeners): void
        once(event: string, listeners: EventListeners): void
        any(listeners: EventListeners): void
        onAny(listeners: EventListeners): void
        emit(event: string, ...args: any[]): void
        fire(event: string, ...args: any[]): void
        off(event: string, listeners: EventListeners): void
        offAny(listeners: EventListeners): void
        removeListener(event: string, listeners: EventListeners): void
        removeAllListeners(event: string): void
        setMaxListeners(number: number): void
        fake(): void
        restore(): void
    }

    class Encryption {
        encrypt(input: string | number | Object): string
        decrypt(cipherText: string): string | number | Object
        base64Encode(input: string): string
        base64Decode(encodedText: string): string
        // base64Decode(encodedText: NodeBuffer): string
    }

    type ExceptionHandler = (error: any, ctx: Http.Context) => void

    class Exception {
        clear(): void
        getHandler(name: string): Function | undefined
        getReporter(name: string): Function | undefined
        handle(name: string, callback: ExceptionHandler): Exception
        handle(name: string, callback: ExceptionHandler): Exception
    }

    class Hash {
        make(value: string, rounds: number): Promise<string>
        verify(value: string, hash: string): Promise<boolean>
    }

    class Helpers {
        configPath(): string
        appRoot(toFile?: ''): string
        publicPath(toFile?: ''): string
        resourcesPath(toFile?: ''): string
        viewsPath(toFile?: ''): string
        databasePath(toFile?: ''): string
        migrationsPath(toFile?: ''): string
        seedsPath(toFile?: ''): string
        tmpPath(toFile?: ''): string
        promisify(fn: Function, options: Object): Promise<any>
        isAceCommand(): boolean
    }

    type LogLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7

    class Logger {
        level: LogLevel
        log(level: LogLevel, message: string, ...options: any[]): void
        debug(message: string, ...options: any[]): void
        info(message: string, ...options: any[]): void
        notice(message: string, ...options: any[]): void
        warning(message: string, ...options: any[]): void
        error(message: string, ...options: any[]): void
        crit(message: string, ...options: any[]): void
        alert(message: string, ...options: any[]): void
        emerg(message: string, ...options: any[]): void
    }

    namespace Http {
        class Request {
            body: Object
            get(): Object
            post(): Object
            all(): Object
            raw(): Object
            collect(keys: string[]): Object[]
            input(key: string, defaultValue?: any): any
            except(keys: string[]): Object
            only(keys: string[]): Object
            method(): string
            intended(): string
            headers(): Object
            header(key: string, defaultValue?: any): any
            ip(trust?: boolean): string
            ips(trust?: boolean): string[]
            protocol(trust?: boolean): string
            secure(): boolean
            subdomains(trust?: boolean, offset?: number): string[]
            ajax(): boolean
            pjax(): boolean
            hostname(trust?: boolean): string
            url(): string
            originalUrl(): string
            is(types: string[]): string
            accepts(types: string[]): string | string[]
            types(): string[]
            language(acceptedLanguages: string[]): string
            languages(): string[]
            encoding(acceptedEncodings: string[]): string
            encodings(): string[]
            charset(acceptedCharsets: string[]): string
            charsets(): string[]
            hasBody(): boolean
            cookies(): { [key: string]: string }
            plainCookies(): { [key: string]: string }
            cookie(key: string, defaultValue?: any): any
            plainCookie(key: string, defaultValue?: any): any
            match(routes: string[]): boolean
            fresh(): boolean
            stale(): boolean
            format(): string
        }

        class Response {
            finished: boolean
            headersSent: boolean
            isPending: boolean
            status(): number
            header(key: string, value: string): Response
            safeHeader(key: string, value: string): Response
            removeHeader(key: string): Response
            getHeader(key: string): string | void
            download(filePath: string, options?: {}): void
            attachment(filePath: string, name?: string, disposition?: string, options?: {}): void
            location(url: string): Response
            redirect(url: string, sendParams?: false, status?: 302): void
            route(routeNameOrHandler: string, data?: {}, domain?: string, sendParams?: false, status?: 302): void
            vary(field: string): Response
            type(type: string, charset?: string): Response
            send(body: any, generateEtag?: boolean): void
            json(body: Object, generateEtag?: boolean): void
            jsonp(body: Object, callbackFn?: Function, generateEtag?: boolean): void
            end(): void
            cookie(key: string, value: any, options?: {}): void
            plainCookie(key: string, value: any, options?: {}): void
            clearCookie(key: string): void
            abortIf(expression: any, status: number, body: any): void
            abortUnless(expression: any, status: number, body: any): void
        }

        class Context {
            auth: WorkInProgress
            request: Adonis.Http.Request
            response: Adonis.Http.Response
            view: Adonis.View
            session: Adonis.Session
        }

        type Handler = (ctx: Context) => any
    }

    class Route {
        domain(domain: string): Route
        formats(formats: string[], strict: false): Route
        as(name: string): Route
        middleware(middleware: string | string[]): Route
        middleware(...middleware: Function[]): Route
        prependMiddleware(middleware: string | string[]): Route
        prependMiddleware(...middleware: Function[]): Route
        prefix(prefix: string): Route
        resolve(url: string, verb: 'string', host?: string): { url: string; params: string[]; subdomains: {} } | null
        toJSON(): {
            route: Route
            verbs: string[]
            handler: string | Http.Handler
            middleware: Array<string | Function>
            name: string
            domain?: RegExp
        }
    }

    namespace Route {
        class Brisk {
            setHandler(handler: Function | string, verbs: string[]): Route
            render(template: string, data?: {}): Route
        }

        class Group {
            middleware(middleware: string | string[]): Group
            middleware(...middleware: Function[]): Group
            formats(formats: string[], strict: false): Group
            prefix(prefix: string): Group
            domain(domain: string): Group
        }

        class Resource {
            only(names: string[]): Resource
            except(names: string[]): Resource
            apiOnly(): Resource
            middleware(middleware: string | string[]): Resource
            middleware(middleware: Map<string[], string>): Resource
            formats(formats: string[], strict: false): Resource
        }

        class Manager {
            route(route: string, handler: string | Http.Handler, verbs: string[]): Route
            get(route: string, handler: string | Http.Handler): Route
            post(route: string, handler: string | Http.Handler): Route
            put(route: string, handler: string | Http.Handler): Route
            patch(route: string, handler: string | Http.Handler): Route
            delete(route: string, handler: string | Http.Handler): Route
            any(route: string, handler: string | Http.Handler): Route
            on(route: string): Brisk
            match(url: string, verb: string, host?: string): Object | null
            group(callback: Function): Group
            group(name: string, callback: Function): Group
            resource(resouce: string, controller: string): Resource
            list(): Route[]
            url(routeNameOrHandler: string, data?: {}, options?: string): string | null
        }
    }

    class Session {
        // TODO
    }

    class View {
        engine: View.Engine
        global(name: string, value: any): void
        share(locals: Object): View.Engine
        render(view: string, data?: {}): string
        renderString(statement: string, data?: {}): string
        presenter(presenter: string): View.Engine
        tag(tag: View.Tag): void
    }

    namespace View {
        class Engine {
            new(): Template
            tag(tag: Tag): void
            configure(options: Object): void
            global(name: string, value: any): void
            registerViews(location: string): void
            registerPresenters(location: string): void
            renderString(statement: string, data?: {}): string
            compileString(statement: string, asFunction?: true): string
            render(view: string, data?: {}): string
            compile(view: string, asFunction?: true): string
            presenter(presenter: string): Engine
            share(locals: Object): Engine
        }

        class Template {
            // TODO
        }

        interface Tag {
            tagName: string
            compile(
                compiler: Object,
                lexer: Object,
                buffer: Object,
                options: {
                    body: string
                    childs: any[]
                    lineno: number
                }
            ): void
            run(): void
        }
    }
}

declare namespace AdonisNamespaces {
    type Config = 'Config' | 'Adonis/Src/Config'
    type Database = 'Database' | 'Adonis/Src/Database'
    type Env = 'Env' | 'Adonis/Src/Env'
    type Event = 'Event' | 'Adonis/Src/Event'
    type Encryption = 'Encryption' | 'Adonis/Src/Encryption'
    type Exception = 'Exception' | 'Adonis/Src/Exception'
    type Factory = 'Factory' | 'Adonis/Src/Factory'
    type Hash = 'Hash' | 'Adonis/Src/Hash'
    type Helpers = 'Helpers' | 'Adonis/Src/Helpers'
    type Logger = 'Logger' | 'Adonis/Src/Logger'
    type Lucid = 'Lucid' | 'Adonis/Src/Lucid'
    type Middleware = 'Middleware' | 'Adonis/Src/Middleware'
    type Route = 'Route' | 'Adonis/Src/Route'
    type Schema = 'Schema' | 'Adonis/Src/Schema'
    type View = 'View' | 'Adonis/Src/View'
    type Ws = 'Ws' | 'Adonis/Addons/Ws'
}

declare function use(namespace: AdonisNamespaces.Config): Adonis.Config
declare function use(namespace: AdonisNamespaces.Database): Adonis.WorkInProgress
declare function use(namespace: AdonisNamespaces.Env): Adonis.Env
declare function use(namespace: AdonisNamespaces.Event): Adonis.Event
declare function use(namespace: AdonisNamespaces.Encryption): Adonis.Encryption
declare function use(namespace: AdonisNamespaces.Exception): Adonis.Exception
declare function use(namespace: AdonisNamespaces.Factory): Adonis.WorkInProgress
declare function use(namespace: AdonisNamespaces.Hash): Adonis.Hash
declare function use(namespace: AdonisNamespaces.Helpers): Adonis.Helpers
declare function use(namespace: AdonisNamespaces.Logger): Adonis.WorkInProgress
declare function use(namespace: AdonisNamespaces.Lucid): Adonis.WorkInProgress
declare function use(namespace: AdonisNamespaces.Middleware): Adonis.WorkInProgress
declare function use(namespace: AdonisNamespaces.Route): Adonis.Route.Manager
declare function use(namespace: AdonisNamespaces.Schema): Adonis.WorkInProgress
declare function use(namespace: AdonisNamespaces.View): Adonis.View
declare function use(namespace: AdonisNamespaces.Ws): Adonis.WorkInProgress
