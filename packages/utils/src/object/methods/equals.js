import deepEquals from './deepEquals';
import resolveFieldData from './resolveFieldData';

export default function equals(obj1, obj2, field) {
    if (field) return resolveFieldData(obj1, field) === resolveFieldData(obj2, field);
    else return deepEquals(obj1, obj2);
}
