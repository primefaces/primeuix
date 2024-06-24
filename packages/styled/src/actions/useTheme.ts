import { $t } from '../helpers/index';

export default function useTheme(theme: any): any {
    return $t(theme).update({ mergePresets: false });
}
