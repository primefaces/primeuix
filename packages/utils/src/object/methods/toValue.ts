import resolve from './resolve';

type ReactRef = { current: unknown };
type VueRef = { value: unknown };

export default function toValue(value: unknown): unknown {
    if (value && typeof value === 'object') {
        if (Object.hasOwn(value, 'current')) {
            // For React
            return (value as ReactRef).current;
        } else if (Object.hasOwn(value, 'value')) {
            // For Vue
            return (value as VueRef).value;
        }
    }

    // For Angular signals and functions usage
    return resolve(value);
}
