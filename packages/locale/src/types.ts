export interface LocaleOptions {
    /**
     * The current language
     */
    lang?: string | undefined;
    /**
     * The fallback language if language not found
     */
    fallbackLang?: string | undefined;
    /**
     * The translation locales of all languages that added to the "Locale" instance
     */
    locales?: Record<string, any>[] | undefined;
}

export interface LocaleInstance {
    init(options: LocaleOptions): any;
    use(lang: string): any;
    add(lang: string, locale?: Record<string, any>): any;
    update(lang: string, locale?: Record<string, any>): any;
    get(lang: string): any;
    lang: string;
    locale: any;
}
