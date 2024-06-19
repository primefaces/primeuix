export default function isObject(value, empty = true) {
    return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
}
