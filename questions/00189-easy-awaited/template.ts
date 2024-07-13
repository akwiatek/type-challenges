type MyAwaited<T> = T extends PromiseLike<infer A> ? MyAwaited<A> : T;
