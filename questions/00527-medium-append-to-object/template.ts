type AppendToObject<T, U extends PropertyKey, V> = {
  [P in (keyof T) | U]: P extends keyof T ? T[P]: V;
};
