import { compile, serialize, stringify } from 'stylis';
import minifyCSS from './minifyCSS';

export default function transformCSS(css: string | undefined, params: { prefix?: string; root?: ShadowRoot | HTMLElement } = {}): string | undefined {
    if (!css) {
        return css;
    }

    let transformedCss = css;

    if (params.prefix) {
        if (css.includes(':root')) {
            transformedCss = css.replaceAll(':root', params.prefix);
        } else {
            transformedCss = serialize(compile(`${params.prefix} { ${css} }`), stringify);
        }
    } else if (params.root && 'host' in params.root && css.includes(':root')) {
        transformedCss = css.replaceAll(':root', ':host');
    }

    return minifyCSS(transformedCss);
}
