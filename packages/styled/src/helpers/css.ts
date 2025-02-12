import { resolve } from '@primeuix/utils/object';
import { dt as dtSingleton } from './dt';

export const getCssInstance = (dt: typeof dtSingleton) => {
    function css(style: any): any {
        return resolve(style, { dt });
    }

    return { css };
};

export const { css } = getCssInstance(dtSingleton);
