export default function deepEquals(a, b) {
    if (a === b) return true;

    if (a && b && typeof a == 'object' && typeof b == 'object') {
        var arrA = Array.isArray(a),
            arrB = Array.isArray(b),
            i,
            length,
            key;

        if (arrA && arrB) {
            length = a.length;
            if (length != b.length) return false;
            for (i = length; i-- !== 0; ) if (!deepEquals(a[i], b[i])) return false;

            return true;
        }

        if (arrA != arrB) return false;

        var dateA = a instanceof Date,
            dateB = b instanceof Date;

        if (dateA != dateB) return false;
        if (dateA && dateB) return a.getTime() == b.getTime();

        var regexpA = a instanceof RegExp,
            regexpB = b instanceof RegExp;

        if (regexpA != regexpB) return false;
        if (regexpA && regexpB) return a.toString() == b.toString();

        var keys = Object.keys(a);

        length = keys.length;

        if (length !== Object.keys(b).length) return false;

        for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

        for (i = length; i-- !== 0; ) {
            key = keys[i];
            if (!deepEquals(a[key], b[key])) return false;
        }

        return true;
    }

    return a !== a && b !== b;
}
