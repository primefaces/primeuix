import isObject from './isObject';

export default function nestedKeys(obj = {}, parentKey = '') {
    return Object.entries(obj).reduce((o, [key, value]) => {
        const currentKey = parentKey ? `${parentKey}.${key}` : key;

        isObject(value) ? (o = o.concat(nestedKeys(value, currentKey))) : o.push(currentKey);

        return o;
    }, []);
}
