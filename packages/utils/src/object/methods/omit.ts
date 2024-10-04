import isObject from './isObject';

export default function omit(obj: any, ...keys: any[]): any {
    if (!isObject(obj)) return obj;

    const copy = { ...obj };

    keys?.flat().forEach((key) => delete copy[key]);

    return copy;
}
