type Curried<F> =
  F extends (...args: infer T) => infer R ?
    T['length'] extends 0 | 1 ? F :
    T extends [infer A, ...infer Rest] ? (a: A) => Curried<(...rest: Rest) => R> :
    never :
  never;

declare function Currying<F>(fn: F): Curried<F>;
