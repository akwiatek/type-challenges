type Consumers<U> = U extends unknown ? (arg: U) => never : never;

type UnionToIntersection<U> = Consumers<U> extends (arg: infer CommonArg) => never ? CommonArg : never;
