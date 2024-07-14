export type Same<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type IndexOf<T, U, Previous extends unknown[] = []> =
  T extends [infer First, ...infer After]
    ? Same<First, U> extends true
      ? Previous['length']
      : IndexOf<After, U, [...Previous, First]>
    : -1
