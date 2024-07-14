type Same<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type LastIndexOf<T extends unknown[], U> =
  T extends [...infer Before, infer Last]
    ? Same<Last, U> extends true
      ? Before['length']
      : LastIndexOf<Before, U>
    : -1
;
