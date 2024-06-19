import findIndexInList from './findIndexInList';

export default function insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
        let injected = false;

        for (let i = 0; i < arr.length; i++) {
            let currentItemIndex = findIndexInList(arr[i], sourceArr);

            if (currentItemIndex > index) {
                arr.splice(i, 0, item);
                injected = true;
                break;
            }
        }

        if (!injected) {
            arr.push(item);
        }
    } else {
        arr.push(item);
    }
}
