export interface LocaleOptions {
    /**
     * The current language
     */
    lang?: string;
    /**
     * The fallback language if language not found
     */
    fallbackLang?: string;
    /**
     * The translation locales of all languages that added to the "Locale" instance
     */
    locales?: Record<string, Record<string, any>>;
}

export interface LocaleInstance {
    init(options: LocaleOptions): LocaleInstance;
    use(lang?: string): void;
    add(lang: string, locale: Record<string, any>): LocaleInstance;
    update(lang: string, locale: Record<string, any>): LocaleInstance;
    get(lang?: string): Record<string, any> | undefined;
    readonly lang: string;
    readonly locale: Record<string, any> | undefined;
}
