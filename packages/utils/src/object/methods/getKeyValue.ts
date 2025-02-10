import isObject from './isObject';
import resolve from './resolve';
import toFlatCase from './toFlatCase';

export default function getKeyValue<T extends Record<string, unknown>>(obj: T, key: string = '', params: unknown = {}): unknown {
    if (!isObject(obj)) return undefined;

    const fKeys = toFlatCase(key).split('.');
    const fKey = fKeys.shift();

    if (!fKey) return resolve(obj, params);

    const matchedKey = Object.keys(obj).find((k) => toFlatCase(k) === fKey) as keyof T | undefined;

    return matchedKey ? getKeyValue(resolve(obj[matchedKey], params) as Record<string, unknown>, fKeys.join('.'), params) : undefined;
}
