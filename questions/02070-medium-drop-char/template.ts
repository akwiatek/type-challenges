type DropChar<S, C> = S extends `${infer Before}${C}${infer After}` ? `${Before}${DropChar<After, C>}` : S;
