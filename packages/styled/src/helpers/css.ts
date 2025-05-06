import { resolve } from '@primeuix/utils';
import { type StyleType, transformDtToInterpolated } from '..';
import { dt } from './dt';

export function css(strings: TemplateStringsArray | StyleType, ...exprs: unknown[]): string | undefined {
    if (strings instanceof Array) {
        const raw = strings.reduce((acc, str, i) => acc + str + (resolve(exprs[i], { dt }) ?? ''), '');
        const interpolated = transformDtToInterpolated(raw);

        const compile = new Function('{ dt }', `return \`${interpolated}\`;`);

        return compile({ dt }) as string | undefined;
    }

    return resolve(strings as unknown, { dt }) as string | undefined;
}
