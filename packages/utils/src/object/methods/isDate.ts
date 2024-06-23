export default function isDate(value: any): boolean {
    return value instanceof Date && value.constructor === Date;
}
