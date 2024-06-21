import isString from './isString';

export default function toTokenKey(str) {
    return isString(str) ? str.replace(/[A-Z]/g, (c, i) => (i === 0 ? c : '.' + c.toLowerCase())).toLowerCase() : str;
}
