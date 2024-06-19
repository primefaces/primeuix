import isString from './isString';

export default function toCapitalCase(str) {
    return isString(str, { empty: false }) ? str[0].toUpperCase() + str.slice(1) : str;
}
