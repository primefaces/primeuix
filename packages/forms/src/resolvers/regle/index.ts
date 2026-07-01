import { toValues } from '@primeuix/forms/utils';
import { isNotEmpty } from '@primeuix/utils';
import type { JoinDiscriminatedUnions, RegleRoot } from '@regle/core';
import { flatErrors } from '@regle/core';
import { ResolverOptions, ResolverResult } from '..';

export const regleResolver = <T extends Record<string, unknown>>(r$: RegleRoot<T>, resolverOptions: ResolverOptions) => {
    return async ({ values, name }: { values: Record<string, unknown>; name: string }): Promise<ResolverResult<T>> => {
        const { raw = false } = resolverOptions || {};

        const { valid, data: result } = await r$.$validate(values as JoinDiscriminatedUnions<T>);

        if (valid) {
            return {
                values: toValues(raw ? values : undefined, name),
                errors: {}
            };
        }

        const errors = flatErrors(r$.$errors, { includePath: true }).reduce(
            (acc, { message, path }) => {
                if (path) {
                    const pathKey = isNotEmpty(path) ? path.join('.') : name;

                    acc[pathKey] ||= [];
                    acc[pathKey].push(message);
                }

                return acc;
            },
            {} as ResolverResult<unknown>['errors']
        );

        return {
            values: toValues(raw ? values : result, name),
            errors
        };
    };
};
