import resolveFieldData from './resolveFieldData';

export default function filter<T = any>(value: T[], fields: string[], filterValue: string): T[] {
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
