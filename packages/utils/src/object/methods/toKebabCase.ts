import isString from './isString';

export default function toKebabCase(str: string): string {
    // convert snake, camel and pascal cases to kebab case
    return isString(str)
        ? str
              .replace(/(_)/g, '-')
              .replace(/[A-Z]/g, (c, i) => (i === 0 ? c : '-' + c.toLowerCase()))
              .toLowerCase()
        : str;
}
