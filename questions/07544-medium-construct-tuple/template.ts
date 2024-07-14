type ConstructTuple<L extends number, Tuple extends unknown[] = []> = L extends Tuple['length'] ? Tuple : ConstructTuple<L, [...Tuple, unknown]>;
