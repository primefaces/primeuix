import setAttributes from './setAttributes';

export default function createElement(type: string, attributes: { [key: string]: any } = {}, ...children: (string | Node)[]): HTMLElement | undefined {
    if (type) {
        const element = document.createElement(type);

        setAttributes(element, attributes);
        element.append(...children);

        return element;
    }

    return undefined;
}
