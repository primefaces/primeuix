export default function isDate(value) {
    return value instanceof Date && value.constructor === Date;
}
