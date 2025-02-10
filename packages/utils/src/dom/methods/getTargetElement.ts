import isExist from './isExist';
import toElement from './toElement';

export default function getTargetElement(target: unknown, currentElement: Element): Window | Document | Element | null | undefined {
    if (!target) return undefined;

    switch (target) {
        case 'document':
            return document;
        case 'window':
            return window;
        case 'body':
            return document.body;
        case '@next':
            return currentElement?.nextElementSibling;
        case '@prev':
            return currentElement?.previousElementSibling;
        case '@parent':
            return currentElement?.parentElement;
        case '@grandparent':
            return currentElement?.parentElement?.parentElement;

        default: {
            if (typeof target === 'string') {
                return document.querySelector(target);
            }

            const isFunction = (value: unknown): value is (...args: unknown[]) => unknown => typeof value === 'function' && 'call' in value && 'apply' in value;
            const element = toElement(isFunction(target) ? target() : target);

            return element?.nodeType === 9 || isExist(element as Element) ? element : undefined;
        }
    }
}
