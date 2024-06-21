import isExist from './isExist';

export default function removeStyleTag(element) {
    if (isExist(element)) {
        try {
            element.parentNode.removeChild(element);
        } catch (error) {
            // style element may have already been removed in a fast refresh
        }

        element = null;
    }

    return element;
}
