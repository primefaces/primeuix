export default function isFunction(value) {
    return !!(value && value.constructor && value.call && value.apply);
}
