export interface ResolverOptions {
    sync?: boolean;
    raw?: boolean;
}

export interface ResolverResult<T> {
    values: T;
    errors: Record<string, any>;
}

export * from '@primeuix/forms/resolvers/joi';
export * from '@primeuix/forms/resolvers/superstruct';
export * from '@primeuix/forms/resolvers/valibot';
export * from '@primeuix/forms/resolvers/yup';
export * from '@primeuix/forms/resolvers/zod';
