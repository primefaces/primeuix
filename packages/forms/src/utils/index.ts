import { isObject } from '@primeuix/utils/object';

export const toValues = (value: any, name?: string) => {
    if (isObject(value) && Object.hasOwn(value, name)) {
        return value;
    }

    return name ? { [name]: value } : value;
};
