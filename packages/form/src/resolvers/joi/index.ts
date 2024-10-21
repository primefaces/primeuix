import { ResolverOptions, ResolverResult } from '..';

export const joiResolver =
    <T>(schema: any, schemaOptions?: any, resolverOptions?: ResolverOptions) =>
    async ({ values }: any): Promise<ResolverResult<T>> => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result = await schema[sync ? 'validate' : 'validateAsync'](values, { abortEarly: false, ...schemaOptions });

            return {
                values: raw ? values : result,
                errors: {}
            };
        } catch (e: any) {
            if (e?.details) {
                return {
                    values: raw ? values : {},
                    errors: e.details.reduce((acc: Record<string, any[]>, error: any) => {
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
