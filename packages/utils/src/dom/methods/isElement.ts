export default function isElement(element: any): boolean {
    return typeof HTMLElement === 'object' ? element instanceof HTMLElement : element && typeof element === 'object' && element !== null && element.nodeType === 1 && typeof element.nodeName === 'string';
}
