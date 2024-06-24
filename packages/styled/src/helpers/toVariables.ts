import { isObject, matchRegex, toKebabCase } from '@primeuix/utils/src/object';
import Theme from '../config/index';
import { getRule, getVariableName, getVariableValue, merge, setProperty, toNormalizeVariable, toValue } from '../utils/index';

export default function (theme: any, options: any = {}): { value: any[]; tokens: any[]; declarations: string; css: string } {
    const VARIABLE = Theme.defaults.variable;
    const { prefix = VARIABLE.prefix, selector = VARIABLE.selector, excludedKeyRegex = VARIABLE.excludedKeyRegex } = options;

    const _toVariables = (_theme: any, _prefix = '') => {
        return Object.entries(_theme).reduce(
            (acc: any, [key, value]) => {
                const px = matchRegex(key, excludedKeyRegex) ? toNormalizeVariable(_prefix) : toNormalizeVariable(_prefix, toKebabCase(key));
                const v = toValue(value);

                if (isObject(v)) {
                    const { variables, tokens } = _toVariables(v, px);

                    merge(acc['tokens'], tokens);
                    merge(acc['variables'], variables);
                } else {
                    acc['tokens'].push((prefix ? px.replace(`${prefix}-`, '') : px).replaceAll('-', '.') as string);
                    setProperty(acc['variables'], getVariableName(px), getVariableValue(v, px, prefix, [excludedKeyRegex]));
                }

                return acc;
            },
            { variables: [], tokens: [] }
        );
    };

    const { variables, tokens } = _toVariables(theme, prefix);

    return {
        value: variables,
        tokens,
        declarations: variables.join(''),
        css: getRule(selector, variables.join(''))
    };
}
