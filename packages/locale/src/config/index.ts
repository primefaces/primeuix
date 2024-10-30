import { mergeKeys } from '@primeuix/utils/object';
import LocaleService from '../service';

export default {
    _lang: 'en',
    _fallbackLang: undefined,
    _locales: new Map(),
    init({ lang, fallbackLang, locales }: any) {
        this._lang = lang;
        this._fallbackLang = fallbackLang || lang;
        this._locales = new Map(Object.entries(locales));

        return this;
    },
    use(lang: string) {
        this._lang = lang;

        LocaleService.emit('locale:change', {
            lang,
            locale: this.locale
        });
    },
    add(lang: string, locale: any = {}) {
        this._locales.set(lang, mergeKeys(this._locales.get(this._fallbackLang), locale));

        return this;
    },
    update(lang: string, locale: any = {}) {
        this._locales.has(lang) ? this._locales.set(lang, mergeKeys(this._locales.get(lang), locale)) : this.add(lang, locale);

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
};
