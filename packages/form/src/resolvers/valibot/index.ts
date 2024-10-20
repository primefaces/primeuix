import { getDotPath, InferOutput, safeParse, safeParseAsync } from 'valibot';
import { ResolverOptions, ResolverResult } from '..';

export const valibotResolver =
    <T>(schema: any, schemaOptions?: any, resolverOptions?: ResolverOptions) =>
    async ({ values }: any): Promise<ResolverResult<T>> => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result: InferOutput<any> | Promise<InferOutput<any>> = sync ? safeParse(schema, values, { abortPipeEarly: false, ...schemaOptions }) : await safeParseAsync(schema, values, { abortPipeEarly: false, ...schemaOptions });

            if (result.success) {
                return {
                    values: raw ? values : result.output,
                    errors: {}
                };
            } else {
                return {
                    values: raw ? values : {},
                    errors: result.issues?.reduce((acc: Record<string, any[]>, error: any) => {
                        const path = getDotPath(error);
                        if (path) {
                            const pathKey = path.split('.')[0];

                            acc[pathKey] ||= [];
                            acc[pathKey].push(error);
                        }

                        return acc;
                    }, {})
                };
            }
        } catch (e: any) {
            throw e;
        }
    };
