import resolve from './resolve';

export default function toValue(value: any): any {
    if (value && typeof value === 'object') {
        if (value.hasOwnProperty('current')) {
            // For React
            return value.current;
        } else if (value.hasOwnProperty('value')) {
            // For Vue
            return value.value;
        }
    }

    // For Angular signals and functions usage
    return resolve(value);
}
