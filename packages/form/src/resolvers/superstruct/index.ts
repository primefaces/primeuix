import { Struct } from 'superstruct';
import { ResolverOptions, ResolverResult } from '..';

export const superStructResolver =
    <T>(schema: Struct<T>, schemaOptions?: any, resolverOptions?: ResolverOptions) =>
    async ({ values }: any): Promise<ResolverResult<T>> => {
        const { raw = false } = resolverOptions || {};

        try {
            const [errors, data] = schema.validate(values, schemaOptions);

            if (errors) {
                return {
                    values: {} as T,
                    errors: errors.failures().reduce((acc: Record<string, any[]>, error: any) => {
                        if (error.path && error.path.length > 0) {
                            const pathKey = error.path[0];

                            acc[pathKey] ||= [];
                            acc[pathKey].push(error);
                        }

                        return acc;
                    }, {})
                };
            }

            return {
                values: raw ? values : data,
                errors: {}
            };
        } catch (e: any) {
            throw e;
        }
    };
