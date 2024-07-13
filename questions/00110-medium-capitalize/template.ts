type MyCapitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Capitalize<F>}${R}` : S;
