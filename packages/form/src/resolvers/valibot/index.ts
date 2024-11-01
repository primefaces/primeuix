import { toValues } from '@primeuix/form/utils';
import { isNotEmpty } from '@primeuix/utils/object';
import { getDotPath, InferOutput, safeParse, safeParseAsync } from 'valibot';
import { ResolverOptions, ResolverResult } from '..';

export const valibotResolver =
    <T>(schema: any, schemaOptions?: any, resolverOptions?: ResolverOptions) =>
    async ({ values, name }: any): Promise<ResolverResult<T>> => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result: InferOutput<any> | Promise<InferOutput<any>> = sync ? safeParse(schema, values, { abortPipeEarly: false, ...schemaOptions }) : await safeParseAsync(schema, values, { abortPipeEarly: false, ...schemaOptions });

            if (result.success) {
                return {
                    values: toValues(raw ? values : result.output, name),
                    errors: {}
                };
            } else {
                return {
                    values: toValues(raw ? values : undefined, name),
                    errors: result.issues?.reduce((acc: Record<string, any[]>, error: any) => {
                        const path = getDotPath(error);
                        const pathKey = isNotEmpty(path) ? path!.split('.')[0] : name;

                        if (pathKey) {
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
