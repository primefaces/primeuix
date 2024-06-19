export default function isArray(value, empty = true) {
    return Array.isArray(value) && (empty || value.length !== 0);
}
