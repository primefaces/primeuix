import shade from './shade';
import tint from './tint';

const scales: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export default (color: string): string | Record<number, string> => {
    if (/{([^}]*)}/g.test(color)) {
        const token = color.replace(/{|}/g, '');

        return scales.reduce<Record<number, string>>((acc, scale) => ((acc[scale] = `{${token}.${scale}}`), acc), {});
    }

    return typeof color === 'string' ? scales.reduce<Record<number, string>>((acc, scale, i) => ((acc[scale] = i <= 5 ? tint(color, (5 - i) * 19) : shade(color, (i - 5) * 15)), acc), {}) : color;
};
