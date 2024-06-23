import isObject from './isObject';
import resolve from './resolve';
import toFlatCase from './toFlatCase';

export default function getKeyValue(obj: any, key: string = '', params: any = {}): any {
    const fKeys = toFlatCase(key).split('.');
    const fKey = fKeys.shift();

    return fKey ? (isObject(obj) ? getKeyValue(resolve(obj[Object.keys(obj).find((k) => toFlatCase(k) === fKey) || ''], params), fKeys.join('.'), params) : undefined) : resolve(obj, params);
}
