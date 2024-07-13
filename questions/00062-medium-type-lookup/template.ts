type LookUp<U, T> = U extends Record<'type', T> ? U : never;
