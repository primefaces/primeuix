import { AnyObjectSchema, ValidateOptions, ValidationError } from 'yup';
import { ResolverOptions, ResolverResult } from '..';

export const yupResolver =
    <T>(schema: AnyObjectSchema, schemaOptions?: ValidateOptions<any>, resolverOptions?: ResolverOptions) =>
    async ({ values }: any): Promise<ResolverResult<T>> => {
        const { sync = false, raw = false } = resolverOptions || {};

        try {
            const result = await schema[sync ? 'validateSync' : 'validate'](values, { abortEarly: false, ...schemaOptions });

            return {
                values: raw ? values : result,
                errors: {}
            };
        } catch (e: any) {
            if (e instanceof ValidationError && e.inner) {
                return {
                    values: raw ? values : {},
                    errors: e.inner.reduce((acc: Record<string, any[]>, error: ValidationError) => {
                        if (error.path) {
                            const pathKey = error.path.split('.')[0];

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
