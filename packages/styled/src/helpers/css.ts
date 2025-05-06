import { resolve } from '@primeuix/utils';
import { type StyleType, transformDtToInterpolated } from '..';
import { dt } from './dt';

const INTERPOLATION_REGEX = /\$\{dt\.([a-zA-Z0-9_.]+)\}/g;

export function css(strings: TemplateStringsArray | StyleType, ...exprs: unknown[]): string | undefined {
    if (Array.isArray(strings)) {
        const raw = strings.reduce((acc, str, i) => acc + str + (resolve(exprs[i], { dt }) ?? ''), '');
        let interpolated = transformDtToInterpolated(raw);

        interpolated = interpolated.replace(INTERPOLATION_REGEX, (_, path) => {
            const value = resolve(path, { dt });
            return value != null ? String(value) : '';
        });

        return interpolated;
    }

    return resolve(strings as unknown, { dt }) as string | undefined;
}
