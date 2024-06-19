import isElement from './isElement';

export default function getAttribute(element, name) {
    if (isElement(element)) {
        const value = element.getAttribute(name);

        if (!isNaN(value)) {
            return +value;
        }

        if (value === 'true' || value === 'false') {
            return value === 'true';
        }

        return value;
    }

    return undefined;
}
