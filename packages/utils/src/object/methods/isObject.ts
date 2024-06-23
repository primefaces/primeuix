export default function isObject(value: any, empty: boolean = true): boolean {
    return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
}
