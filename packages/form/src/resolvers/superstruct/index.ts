export const superStructResolver =
    (schema: any, schemaOptions: any, resolverOptions: any) =>
    async ({ values }: any) => {
        const { raw = false } = resolverOptions || {};

        try {
            const [errors, data] = schema.validate(values, schemaOptions);

            if (errors) {
                return {
                    values: {},
                    states: errors.failures().reduce((acc: any, error: any) => {
                        if (error.path) {
                            acc[error.path[0]] ||= { errors: [] };
                            acc[error.path[0]]['errors'].push(error);
                        }

                        return acc;
                    }, {})
                };
            }

            return {
                values: raw ? values : data,
                states: {}
            };
        } catch (e: any) {
            // NOOP
        }
    };
