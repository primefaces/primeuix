import setAttributes from './setAttributes';

export default function createStyleTag(attributes = {}, container) {
    let element = document.createElement('style');
    setAttributes(element, attributes);

    if (!container) {
        container = document.head;
    }

    container.appendChild(element);

    return element;
}
