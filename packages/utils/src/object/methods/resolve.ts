import isFunction from './isFunction';

export default function resolve<T>(obj: T | ((...params: unknown[]) => T), ...params: unknown[]): T {
    return isFunction(obj) ? obj(...params) : obj;
}
