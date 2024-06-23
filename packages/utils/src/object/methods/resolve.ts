import isFunction from './isFunction';

export default function resolve<T>(obj: T | ((...params: any[]) => T), ...params: any[]): T {
    return isFunction(obj) ? obj(...params) : obj;
}
