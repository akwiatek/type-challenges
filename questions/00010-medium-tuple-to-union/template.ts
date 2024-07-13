type TupleToUnion<T> = T extends [infer F, ...(infer P)] ? F | TupleToUnion<P> : never;
