import setAttributes from './setAttributes';

export default function createElement(type, attributes = {}, ...children) {
    if (type) {
        const element = document.createElement(type);

        setAttributes(element, attributes);
        element.append(...children);

        return element;
    }

    return undefined;
}
