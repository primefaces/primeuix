export const yupResolver =
    (schema: any, schemaOptions: any, resolverOptions: any) =>
    async ({ values }: any) => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result = await schema[sync ? 'validateSync' : 'validate'](values, { abortEarly: false, ...schemaOptions });

            return {
                values: raw ? values : result,
                states: {}
            };
        } catch (e: any) {
            if (e.inner) {
                return {
                    values: raw ? values : {},
                    states: e.inner.reduce((acc: any, error: any) => {
                        if (error.path) {
                            acc[error.path.split('.')[0]] ||= { errors: [] };
                            acc[error.path.split('.')[0]]['errors'].push(error);
                        }

                        return acc;
                    }, {})
                };
            }
        }
    };
