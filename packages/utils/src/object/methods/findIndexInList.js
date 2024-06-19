export default function findIndexInList(value, list) {
    let index = -1;

    if (list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] === value) {
                index = i;
                break;
            }
        }
    }

    return index;
}
