import isElement from './isElement';

export type ReactElement = { current: Element | null | undefined };
export type VueElement = { el: Element | null | undefined };
export type AngularElementRef = { nativeElement: Element | undefined };
export type AngularElement = { el: AngularElementRef };
export type AngularTemplateRef = { elementRef: AngularElementRef };

export default function toElement(element: unknown): Element | null | undefined {
    let target = element;

    if (element && typeof element === 'object') {
        if (Object.hasOwn(element, 'current')) {
            // For React
            target = (element as ReactElement).current;
        } else if (Object.hasOwn(element, 'nativeElement')) {
            target = (element as AngularElementRef).nativeElement;
        } else if (Object.hasOwn(element, 'elementRef')) {
            target = (element as AngularTemplateRef).elementRef.nativeElement;
        } else if (Object.hasOwn(element, 'el')) {
            if (Object.hasOwn((element as AngularElement).el, 'nativeElement')) {
                // For Angular
                target = (element as AngularElement).el.nativeElement;
            } else {
                // For Vue
                target = (element as VueElement).el;
            }
        }
    }

    return isElement(target) ? target : undefined;
}
