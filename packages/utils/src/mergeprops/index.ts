import { cn } from '../classnames';
import { isFunction } from '../object';

export function mergeProps(...props: any[]): object | undefined {
    return props?.reduce((merged, ps = {}) => {
        for (const key in ps) {
            const value = ps[key];

            if (key === 'style') {
                merged['style'] = { ...merged['style'], ...ps['style'] };
            } else if (key === 'class' || key === 'className') {
                merged[key] = cn(merged[key], ps[key]);
            } else if (isFunction(value)) {
                const fn = merged[key];

                merged[key] = fn
                    ? (...args: any[]) => {
                          fn(...args);
                          value(...args);
                      }
                    : value;
            } else {
                merged[key] = value;
            }
        }

        return merged;
    }, {});
}
