import isArray from './isArray';
import isDate from './isDate';
import isFunction from './isFunction';
import isObject from './isObject';

export default function stringify(value, indent = 2, currentIndent = 0) {
    const currentIndentStr = ' '.repeat(currentIndent);
    const nextIndentStr = ' '.repeat(currentIndent + indent);

    if (isArray(value)) {
        return '[' + value.map((v) => stringify(v, indent, currentIndent + indent)).join(', ') + ']';
    } else if (isDate(value)) {
        return value.toISOString();
    } else if (isFunction(value)) {
        return value.toString();
    } else if (isObject(value)) {
        return (
            '{\n' +
            Object.entries(value)
                .map(([k, v]) => `${nextIndentStr}${k}: ${stringify(v, indent, currentIndent + indent)}`)
                .join(',\n') +
            `\n${currentIndentStr}` +
            '}'
        );
    } else {
        return JSON.stringify(value);
    }
}
