import { ParseParams, Schema, ZodError } from 'zod';
import { ResolverOptions, ResolverResult } from '..';

export const zodResolver =
    <T extends Schema<any, any>>(schema: T, schemaOptions?: ParseParams, resolverOptions?: ResolverOptions) =>
    async ({ values }: any): Promise<ResolverResult<T>> => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result = await schema[sync ? 'parse' : 'parseAsync'](values, schemaOptions);

            return {
                values: raw ? values : result,
                errors: {}
            };
        } catch (e: any) {
            if (e instanceof ZodError && Array.isArray(e?.errors)) {
                return {
                    values: raw ? values : {},
                    errors: e.errors.reduce((acc: Record<string, any[]>, error: any) => {
                        if (error.path) {
                            const pathKey = error.path[0];

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
