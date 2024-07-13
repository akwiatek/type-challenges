type Chainable<T = unknown> = {
  option<K extends PropertyKey, V>(key: K, value: V): Chainable<Omit<T, K> & Record<K, V>>;
  get(): T
}
