import { resolve, toElement } from '@primeuix/utils';
import { logger, mergeAssign, toCamelCase } from '../utils';
import type { LoggerItems } from '../utils/type';
import type { ComponentInstance, Options, SetupOptions } from './type';

export function defineComponent<TRefs, TProps, TState, TEmits, TExpose>(name: string, setup: (options: SetupOptions<TRefs, TProps, TState, TEmits, TExpose>) => void) {
    logger.clearCache();

    return (options: Options<TRefs, TProps, TState, TEmits> = {}): ComponentInstance<TRefs, TProps, TState, TExpose> => {
        const instance: ComponentInstance<TRefs, TProps, TState, any> = {
            name: name || 'UnknownComponent',
            $refs: options.refs,
            $props: options.props,
            $state: options.state,
            $update: (fn: (prev: Options<TRefs, TProps, TState, TEmits>) => Options<TRefs, TProps, TState, TEmits>) => {
                const { refs, props, state, emits } = fn({
                    refs: instance.$refs,
                    props: instance.$props,
                    state: instance.$state,
                    emits: options.emits
                });

                if (refs) mergeAssign(instance.$refs, refs);
                if (props) mergeAssign(instance.$props, props);
                if (state) mergeAssign(instance.$state, state);
            }
        };

        setup({
            defineRefs: (refs) => {
                mergeAssign(instance.$refs, refs, options.refs);

                return new Proxy(instance.$refs, {
                    get(target, prop: string) {
                        const value = target[prop as keyof typeof target];

                        return value ? toElement(value) : undefined;
                    }
                });
            },
            defineProps: (props) => {
                mergeAssign(instance.$props, props, options.props);

                return instance.$props;
            },
            defineState: (state) => {
                if (state) {
                    mergeAssign(instance.$state, state, options.state);
                }

                return instance.$state;
            },
            defineExpose: (expose) => {
                if (expose) {
                    mergeAssign(instance, expose);
                }

                return instance as ComponentInstance<TRefs, TProps, TState, TExpose & typeof expose>;
            },
            defineEmits: (emits) => {
                return (event, ...args: any[]) => {
                    const handler = (options.emits as any)?.[toCamelCase(event as string)] as any; // @todo - update type

                    if (handler) handler(...args);
                };
            },
            defineLogs: (logs) => {
                const definedLogs = resolve(logs) ?? {};

                Object.keys(definedLogs).forEach((key) => {
                    const logMethod = (logger as any)[key];

                    if (logMethod && definedLogs[key as keyof typeof definedLogs]) {
                        logMethod(...(definedLogs[key as keyof typeof definedLogs] as LoggerItems));
                    }
                });

                return logger;
            }
        });

        return instance;
    };
}
