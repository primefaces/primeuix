import isElement from './isElement';

export default function find(element, selector) {
    return isElement(element) ? element.querySelectorAll(selector) : [];
}
