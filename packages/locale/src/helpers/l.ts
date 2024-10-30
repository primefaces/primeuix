import Locale from '../config/index';
import type { LocaleInstance, LocaleOptions } from '../types';

export const $l = (options?: LocaleOptions) => {
    options && Locale.init(options);

    return {
        get(lang?: string): Record<string, any> | undefined {
            return Locale.get(lang);
        },
        get langs(): string[] {
            return Array.from(Locale._locales.keys());
        },
        get locales(): Record<string, any>[] {
            return Array.from(Locale._locales.values());
        },
        // actions
        define(lang: string, locale: Record<string, any> = {}): LocaleInstance {
            return Locale.add(lang, locale);
        },
        update(lang: string, locale: Record<string, any> = {}): LocaleInstance {
            return Locale.update(lang, locale);
        },
        use(lang?: string): void {
            return Locale.use(lang);
        }
    };
};
