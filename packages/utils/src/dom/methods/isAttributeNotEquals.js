import isAttributeEquals from './isAttributeEquals';

export default function isAttributeNotEquals(element, name, value) {
    return !isAttributeEquals(element, name, value);
}
