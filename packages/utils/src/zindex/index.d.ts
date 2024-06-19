export declare const ZIndex: {
    get(element?: HTMLElement): number;
    set(key: string, element: HTMLElement, baseZIndex?: number): void;
    clear(element: HTMLElement): void;
    getCurrent(): number;
};
