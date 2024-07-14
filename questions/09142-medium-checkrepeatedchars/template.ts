type CheckRepeatedChars<T extends string, PreviousCharacters = never> =
  T extends `${infer First}${infer Remaining}`
    ? First extends PreviousCharacters
      ? true
      : CheckRepeatedChars<Remaining, PreviousCharacters | First>
    : false;
