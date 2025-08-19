import { resolve } from '@primeuix/utils';
import { evaluateDtExpressions, type StyleType } from '..';
import { dt as dtSingleton } from './dt';

export const getCssInstance = (dt: typeof dtSingleton) => {
    function css(strings: TemplateStringsArray | StyleType, ...exprs: unknown[]): string | undefined {
        if (strings instanceof Array) {
            const raw = strings.reduce((acc, str, i) => acc + str + (resolve(exprs[i], { dt }) ?? ''), '');

            return evaluateDtExpressions(raw, dt);
        }

        return resolve(strings as unknown, { dt }) as string | undefined;
    }

    return { css };
};

export const { css } = getCssInstance(dtSingleton);
