import getAttribute from './getAttribute';
import isElement from './isElement';

export default function isAttributeEquals(element, name, value) {
    return isElement(element) ? getAttribute(element, name) === value : false;
}
