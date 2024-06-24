import isObject from './isObject';

export default function mergeKeys(...args: Record<string, any>[]): Record<string, any> {
    const _mergeKeys = (target: Record<string, any> = {}, source: Record<string, any> = {}) => {
        const mergedObj: Record<string, any> = { ...target };

        Object.keys(source).forEach((key) => {
            if (isObject(source[key]) && key in target && isObject(target[key])) {
                mergedObj[key] = _mergeKeys(target[key], source[key]);
            } else {
                mergedObj[key] = source[key];
            }
        });

        return mergedObj;
    };

    return args.reduce((acc, obj, i) => (i === 0 ? obj : _mergeKeys(acc, obj)), {});
}
