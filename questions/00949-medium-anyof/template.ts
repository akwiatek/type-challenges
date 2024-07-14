type Falsy = null | undefined | false | 0 | [] | '' | Record<PropertyKey, never>;

type AnyOf<T extends readonly unknown[]> = T extends [infer First, ...infer Rest] ? (First extends Falsy ? AnyOf<Rest> : true) : false;
