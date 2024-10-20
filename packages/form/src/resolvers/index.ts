export interface ResolverOptions {
    sync?: boolean;
    raw?: boolean;
}

export interface ResolverResult<T> {
    values: T;
    errors: Record<string, any>;
}

export * from '@primeuix/form/resolvers/joi';
export * from '@primeuix/form/resolvers/superstruct';
export * from '@primeuix/form/resolvers/valibot';
export * from '@primeuix/form/resolvers/yup';
export * from '@primeuix/form/resolvers/zod';
