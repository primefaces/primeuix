export interface ResolverOptions {
    sync?: boolean;
    raw?: boolean;
}

export interface ResolverResult<T> {
    values: T;
    errors: Record<string, any>;
}
