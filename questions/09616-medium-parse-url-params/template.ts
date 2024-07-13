type ParseUrlParams<S extends string> =
  S extends `${string}:${infer Param}/${infer Rest}` ? Param | ParseUrlParams<Rest> :
  S extends `${string}:${infer Param}` ? Param :
  never;
