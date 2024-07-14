type Join<T, U extends string | number = ','> =
  T extends [] ? '' :
  T extends [infer Only extends string] ? `${Only}` :
  T extends [infer First extends string, ...infer Rest] ? `${First}${U}${Join<Rest, U>}` :
  never
