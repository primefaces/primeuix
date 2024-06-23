import isElement from './isElement';

export default function setAttribute(element: HTMLElement, attribute: string = '', value: any): void {
    if (isElement(element) && value !== null && value !== undefined) {
        element.setAttribute(attribute, value);
    }
}
