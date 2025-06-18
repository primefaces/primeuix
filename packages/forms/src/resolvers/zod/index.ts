import { toValues } from '@primeuix/forms/utils';
import { isNotEmpty } from '@primeuix/utils';
import type { ParseParams, Schema } from 'zod';
import type { ResolverOptions, ResolverResult } from '..';

export const zodResolver =
    <T extends Schema<any, any>>(schema: T, schemaOptions?: ParseParams, resolverOptions?: ResolverOptions) =>
    async ({ values, name }: any): Promise<ResolverResult<T>> => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result = await schema[sync ? 'parse' : 'parseAsync'](values, schemaOptions);

            return {
                values: toValues(raw ? values : result, name),
                errors: {}
            };
        } catch (e: any) {
            if (Array.isArray(e?.errors)) {
                return {
                    values: toValues(raw ? values : undefined, name),
                    errors: e.errors.reduce((acc: Record<string, any[]>, error: any) => {
                        const pathKey = isNotEmpty(error.path) ? error.path.join('.') : name;

                        if (pathKey) {
                            acc[pathKey] ||= [];
                            acc[pathKey].push(error);
                        }

                        return acc;
                    }, {})
                };
            }

            throw e;
        }
    };
