type RemoveIndexSignature<T> = {
  [P in keyof T as Extract<PropertyKey, P> extends never ? P : never]: T[P]
}
