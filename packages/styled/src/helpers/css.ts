import { resolve } from '@primeuix/utils/src/object';
import { dt } from './dt';

export function css(style: any): any {
    return resolve(style, { dt });
}
