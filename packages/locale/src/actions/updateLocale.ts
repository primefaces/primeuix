import { $l } from '../helpers/index';

export default function updateLocale(lang: string, locale: any = {}): any {
    return $l().update(lang, locale);
}
