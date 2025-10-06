import type { Logger, LoggerItems } from '../utils/type';

export type SetupOptions<TRefs, TProps, TState, TEmits, TExpose> = {
    defineRefs: <U extends Partial<TRefs>>(refs: U & Record<Exclude<keyof U, keyof TRefs>, unknown>) => TRefs & U;
    defineProps: <U extends Partial<TProps>>(props: U & Record<Exclude<keyof U, keyof TProps>, unknown>) => TProps & U;
    defineState: <U extends Partial<TState>>(state: U & Record<Exclude<keyof U, keyof TState>, unknown>) => TState & U;
    defineExpose: <U extends Partial<TExpose>>(expose?: U & Record<Exclude<keyof U, keyof TExpose>, unknown>) => ComponentInstance<TRefs, TProps, TState, TExpose & U>;
    defineEmits: <T extends string, U extends readonly T[]>(events: U) => <E extends U[number]>(event: E, ...args: any[]) => void;
    defineLogs: (logs?: { [K in keyof Omit<Logger, 'clearCache'>]?: LoggerItems }) => Logger;
};

export type ComponentInstance<TRefs, TProps, TState, TExpose> = {
    name: string;
    $refs: TRefs;
    $props: TProps;
    $state: TState;
    // @todo - update type of fn : Options<TRefs, TProps, TState, TEmits>
    $update: (fn: (prev: Options<TRefs, TProps, TState, any>) => Options<TRefs, TProps, TState, any>) => void;
    // @todo add name, getOption and getState etc.
} & TExpose;

export type Options<TRefs, TProps, TState, TEmits> = {
    refs?: Partial<TRefs>;
    props?: Partial<TProps>;
    state?: Partial<TState>;
    emits?: Partial<TEmits>;
};

export type ReactElementRef = { current: HTMLElement | null | undefined };
export type VueElementRef = { el: HTMLElement | null | undefined };
export type AngularElementRef = { el: { nativeElement: HTMLElement | undefined } };

export type UIElement = ReactElementRef | VueElementRef | AngularElementRef | HTMLElement | null | undefined;
