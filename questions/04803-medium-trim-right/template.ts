type TrimRightWhitespace = ' ' | '\n' | '\t';

type TrimRight<S extends string> = S extends `${infer Before}${TrimRightWhitespace}` ? TrimRight<Before> : S;
