import { getKeyValue, isObject, resolve } from '@primeuix/utils/object';
import Locale from '../config/index';

export const $t = (key: string, ...args: any[]) => {
    let msg = getKeyValue(Locale.locale, key, Locale);

    args?.flat().forEach((arg, i) => {
        const fallback = resolve(arg, Locale);

        if (isObject(fallback)) {
            Object.entries(fallback).forEach(([key, value]) => {
                msg = msg?.replaceAll(`{${key}}`, value);
            });
        } else {
            msg = msg?.replaceAll(`{${i}}`, arg);
        }
    });

    return msg;
};
