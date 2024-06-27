export interface EventBusOptions {
    on(type: string, handler: Function): void;
    off(type: string, handler: Function): void;
    emit(type: string, evt?: any): void;
    clear(): void;
}

export function EventBus(): EventBusOptions {
    const allHandlers = new Map<string, Function[]>();

    return {
        on(type: string, handler: Function) {
            let handlers = allHandlers.get(type);

            if (!handlers) handlers = [handler];
            else handlers.push(handler);

            allHandlers.set(type, handlers);

            return this;
        },
        off(type: string, handler: Function) {
            let handlers = allHandlers.get(type);

            if (handlers) {
                handlers.splice(handlers.indexOf(handler) >>> 0, 1);
            }

            return this;
        },
        emit(type: string, evt?: any) {
            let handlers = allHandlers.get(type);

            if (handlers) {
                handlers.slice().map((handler) => {
                    handler(evt);
                });
            }
        },
        clear() {
            allHandlers.clear();
        }
    };
}
