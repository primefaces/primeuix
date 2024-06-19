import isString from './isString';

export default function toFlatCase(str) {
    // convert snake, kebab, camel and pascal cases to flat case
    return isString(str) ? str.replace(/(-|_)/g, '').toLowerCase() : str;
}
