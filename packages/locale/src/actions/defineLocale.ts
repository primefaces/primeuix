import { $l } from '../helpers';

export default function defineLocale(lang: string, locale: any = {}): any {
    return $l().define(lang, locale);
}
