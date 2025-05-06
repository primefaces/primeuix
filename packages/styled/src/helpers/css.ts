import { resolve } from '@primeuix/utils';
import { type StyleType, transformDtToInterpolated } from '..';
import { dt } from './dt';

const FUNCTION_CALL_REGEX = /dt\(\s*['"`]([^'"`]+)['"`]\s*\)/g;

export function css(strings: TemplateStringsArray | StyleType, ...exprs: unknown[]): string | undefined {
  if (Array.isArray(strings)) {
    // Interpolate expressions into the template
    let raw = strings.reduce((acc, str, i) => acc + str + (resolve(exprs[i], { dt }) ?? ''), '');

    let interpolated = transformDtToInterpolated(raw);

    // Replace dt('foo.bar') with resolved value
    interpolated = interpolated.replace(FUNCTION_CALL_REGEX, (_, path) => {
      const value = resolve(path, { dt });
      return value != null ? String(value) : '';
    });

    return interpolated;
  }

  return resolve(strings as unknown, { dt }) as string | undefined;
}
