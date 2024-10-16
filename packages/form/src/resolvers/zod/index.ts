export const zodResolver =
    (schema: any, schemaOptions: any, resolverOptions: any) =>
    async ({ values }: any) => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result = await schema[sync ? 'parseSync' : 'parse'](values, schemaOptions);

            return {
                values: raw ? values : result,
                states: {}
            };
        } catch (e: any) {
            if (Array.isArray(e?.errors)) {
                return {
                    values: raw ? values : {},
                    states: e.errors.reduce((acc: any, error: any) => {
                        if (error.path) {
                            acc[error.path[0]] ||= { errors: [] };
                            acc[error.path[0]]['errors'].push(error);
                        }

                        return acc;
                    }, {})
                };
            }
        }
    };
