import { getKeyValue, isObject, isString, resolve } from '@primeuix/utils/object';
import Locale from '../config';

/**
 * Translate the key to the current language
 *
 * @param key The key to translate
 * @param args The arguments to replace in the translated message
 */
export const $t = (key: string, ...args: unknown[]) => {
    let msg = getKeyValue(Locale.locale, key, Locale);

    if (isString(msg)) {
        args?.flat().forEach((arg, i) => {
            const fallback = resolve(arg, Locale);

            if (isObject(fallback)) {
                Object.entries(fallback).forEach(([key, value]) => {
                    msg = (msg as string).replaceAll(`{${key}}`, value);
                });
            } else {
                msg = (msg as string).replaceAll(`{${i}}`, arg as any);
            }
        });
    }

    return msg;
};
