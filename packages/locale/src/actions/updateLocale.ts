import { $l } from '../helpers';

export default function updateLocale(lang: string, locale: Record<string, any> = {}): any {
    return $l().update(lang, locale);
}
