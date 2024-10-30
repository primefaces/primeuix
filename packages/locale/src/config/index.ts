import { mergeKeys } from '@primeuix/utils/object';
import LocaleService from '../service';
import type { LocaleInstance, LocaleOptions } from '../types';

export default {
    _lang: 'en',
    _fallbackLang: undefined,
    _locales: new Map(),
    init({ lang, fallbackLang, locales }: LocaleOptions) {
        this._lang = lang ?? 'en';
        this._fallbackLang = fallbackLang || this._lang;
        this._locales = new Map(Object.entries(locales || {}));

        return this;
    },
    use(lang: string) {
        this._lang = lang;

        LocaleService.emit('locale:change', {
            lang,
            locale: this.locale
        });
    },
    add(lang: string, locale: Record<string, any> = {}) {
        this._locales.set(lang, mergeKeys(this._locales.get(this._fallbackLang!) as any, locale));

        return this;
    },
    update(lang: string, locale: Record<string, any> = {}) {
        this._locales.has(lang) ? this._locales.set(lang, mergeKeys(this._locales.get(lang) as any, locale)) : this.add(lang, locale);

        return this;
    },
    get(lang: string) {
        return this._locales.get(lang);
    },
    get lang() {
        return this._lang;
    },
    get locale() {
        return this._locales.get(this.lang);
    }
} as LocaleInstance & { _lang: string; _fallbackLang: string | undefined; _locales: Map<string, Record<string, any>> };
