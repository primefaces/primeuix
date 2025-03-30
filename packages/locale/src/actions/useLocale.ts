import { $l } from '../helpers';

export default function useLocale(lang: string): any {
    return $l().use(lang);
}
