export default function isString(value: any, empty: boolean = true): boolean {
    return typeof value === 'string' && (empty || value !== '');
}
