type Supplier<T> = () => T;

type IsNever<T> = Supplier<T> extends Supplier<never> ? true : false;
