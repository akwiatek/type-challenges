type MyParameters<T> = T extends (...args: infer P) => unknown ? P : never;
