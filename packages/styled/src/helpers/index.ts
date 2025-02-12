import { css, getCssInstance } from './css';
import { $dt, dt, getDtInstance } from './dt';
import { $t, getTInstance } from './t';
import type { default as ThemeSingleton } from '../config/index';

export const getHelpersInstance = (Theme: typeof ThemeSingleton) => {
    const { $dt, dt } = getDtInstance(Theme);
    const { css } = getCssInstance(dt);
    const { $t } = getTInstance(Theme);

    return { css, $dt, dt, $t };
};

export const getHelpersSingleton = () => {
    return { css, $dt, dt, $t };
};

export * from './color/index';
export * from './css';
export * from './dt';
export * from './t';
