import equals from './equals';

export default function contains<T = any>(value: T, list: T[]): boolean {
    if (value != null && list && list.length) {
        for (let val of list) {
            if (equals(value, val)) return true;
        }
    }

    return false;
}
