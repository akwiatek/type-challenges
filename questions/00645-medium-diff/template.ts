type Diff<L, R> = {
  [P in Exclude<keyof L | keyof R, keyof L & keyof R>]:
    P extends keyof L ? L[P] :
    P extends keyof R ? R[P] :
    never;
}
