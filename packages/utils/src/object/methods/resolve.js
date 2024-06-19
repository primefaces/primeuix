import isFunction from './isFunction';

export default function resolve(obj, ...params) {
    return isFunction(obj) ? obj(...params) : obj;
}
