import getParentNode from './getParentNode';

export default function isExist(element) {
    return !!(element !== null && typeof element !== 'undefined' && element.nodeName && getParentNode(element));
}
