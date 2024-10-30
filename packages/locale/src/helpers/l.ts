import Locale from '../config/index';
import type { LocaleOptions } from '../types';

export const $l = (options?: LocaleOptions) => {
    options && Locale.init(options);

    return {
        get(lang: string) {
            return Locale.get(lang || Locale.lang);
        },
        get langs() {
            return Array.from(Locale._locales.keys());
        },
        get locales() {
            return Array.from(Locale._locales.values());
        },
        // actions
        define(lang: string, locale: Record<string, any> = {}) {
            return Locale.add(lang, locale);
        },
        update(lang: string, locale: Record<string, any> = {}) {
            return Locale.update(lang, locale);
        },
        use(lang: string) {
            return Locale.use(lang);
        }
    };
};
