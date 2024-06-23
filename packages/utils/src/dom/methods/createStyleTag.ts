import setAttributes from './setAttributes';

export default function createStyleTag(attributes: { [key: string]: any } = {}, container: Element): HTMLStyleElement {
    let element = document.createElement('style');
    setAttributes(element, attributes);

    if (!container) {
        container = document.head;
    }

    container.appendChild(element);

    return element;
}
