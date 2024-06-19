export default function isString(value, empty = true) {
    return typeof value === 'string' && (empty || value !== '');
}
