export default function reorderArray(value, from, to) {
    if (value && from !== to) {
        if (to >= value.length) {
            to %= value.length;
            from %= value.length;
        }

        value.splice(to, 0, value.splice(from, 1)[0]);
    }
}
