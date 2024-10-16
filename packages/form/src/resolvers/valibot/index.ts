import { getDotPath, safeParse, safeParseAsync } from 'valibot';

export const valibotResolver =
    (schema: any, schemaOptions: any, resolverOptions: any) =>
    async ({ values }: any) => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result: any = sync ? safeParse(schema, values, { abortPipeEarly: false, ...schemaOptions }) : await safeParseAsync(schema, values, { abortPipeEarly: false, ...schemaOptions });

            if (result.success) {
                return {
                    values: raw ? values : result.output,
                    states: {}
                };
            } else {
                return {
                    values: raw ? values : {},
                    states: result.issues?.reduce((acc: any, error: any) => {
                        const path = getDotPath(error);
                        if (path) {
                            acc[path.split('.')[0]] ||= { errors: [] };
                            acc[path.split('.')[0]]['errors'].push(error);
                        }

                        return acc;
                    }, {})
                };
            }
        } catch (e: any) {
            // NOOP
        }
    };
