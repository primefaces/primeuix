import { $l } from '../helpers/index';

export default function useLocale(lang: string): any {
    return $l().use(lang);
}
