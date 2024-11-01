import { toValues } from '@primeuix/form/utils';
import { isNotEmpty } from '@primeuix/utils/object';
import { Struct } from 'superstruct';
import { ResolverOptions, ResolverResult } from '..';

export const superStructResolver =
    <T>(schema: Struct<T>, schemaOptions?: any, resolverOptions?: ResolverOptions) =>
    async ({ values, name }: any): Promise<ResolverResult<T>> => {
        const { raw = false } = resolverOptions || {};

        try {
            const [errors, data] = schema.validate(values, schemaOptions);

            if (errors) {
                return {
                    values: toValues(undefined, name),
                    errors: errors.failures().reduce((acc: Record<string, any[]>, error: any) => {
                        const pathKey = isNotEmpty(error.path) ? error.path[0] : name;

                        if (pathKey) {
                            acc[pathKey] ||= [];
                            acc[pathKey].push(error);
                        }

                        return acc;
                    }, {})
                };
            }

            return {
                values: toValues(raw ? values : data, name),
                errors: {}
            };
        } catch (e: any) {
            throw e;
        }
    };
