type Whitespace = ' ' | '\n' | '\t';

type Trim<S extends string> = S extends `${Whitespace}${infer R}` | `${infer R}${Whitespace}` ? Trim<R> : S;
