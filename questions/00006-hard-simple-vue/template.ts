declare function SimpleVue<
  Data,
  Computed,
  Methods,
  ThisOutcome =
    & Data
    & {
      [P in keyof Computed]: Computed[P] extends (this: Data) => infer R ? R : never;
    }
    & Methods
  >(
    options: {
      data: (this: void) => Data,
      computed: Computed,
      methods: Methods,
    } & ThisType<ThisOutcome>
  ): ThisOutcome
