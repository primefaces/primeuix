export default function focus(element: HTMLElement, options?: FocusOptions): void {
    element && document.activeElement !== element && element.focus(options);
}
