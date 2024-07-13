type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends ((...args: never[]) => unknown) ? T[P] : DeepReadonly<T[P]>
}
