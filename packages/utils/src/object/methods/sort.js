import compare from './compare';
import isEmpty from './isEmpty';

export default function sort(value1, value2, order = 1, comparator, nullSortOrder = 1) {
    const result = compare(value1, value2, comparator, order);
    let finalSortOrder = order;

    // nullSortOrder == 1 means Excel like sort nulls at bottom
    if (isEmpty(value1) || isEmpty(value2)) {
        finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }

    return finalSortOrder * result;
}
