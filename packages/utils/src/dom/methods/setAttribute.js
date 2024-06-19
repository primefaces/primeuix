import isElement from './isElement';

export default function setAttribute(element, attribute = '', value) {
    if (isElement(element) && value !== null && value !== undefined) {
        element.setAttribute(attribute, value);
    }
}
