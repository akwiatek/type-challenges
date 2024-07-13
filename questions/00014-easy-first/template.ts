type First<T extends unknown[]> = T extends [infer F, ...unknown[]]? F : never;
