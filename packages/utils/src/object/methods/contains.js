import equals from './equals';

export default function contains(value, list) {
    if (value != null && list && list.length) {
        for (let val of list) {
            if (equals(value, val)) return true;
        }
    }

    return false;
}
