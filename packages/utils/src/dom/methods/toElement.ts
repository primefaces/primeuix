import isElement from './isElement';

export default function toElement(element: any): Element | undefined {
    let target = element;

    if (element && typeof element === 'object') {
        if (element.hasOwnProperty('current')) {
            // For React
            target = element.current;
        } else if (element.hasOwnProperty('el')) {
            if (element.el.hasOwnProperty('nativeElement')) {
                // For Angular
                target = element.el.nativeElement;
            } else {
                // For Vue
                target = element.el;
            }
        }
    }

    return isElement(target) ? target : undefined;
}
