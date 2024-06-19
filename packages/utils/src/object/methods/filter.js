import resolveFieldData from './resolveFieldData';

export default function filter(value, fields, filterValue) {
    let filteredItems = [];

    if (value) {
        for (let item of value) {
            for (let field of fields) {
                if (String(resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
                    filteredItems.push(item);
                    break;
                }
            }
        }
    }

    return filteredItems;
}
