type Series<
  WantedLength extends number,
  Previous extends {
    tuple: unknown[],
    payload: unknown,
  } = {
    tuple: [],
    payload: never,
  },
  CurrentLength = Previous['tuple']['length'],
  Payload = Previous['payload'] | CurrentLength
  > =
  WantedLength extends CurrentLength
    ? Payload
    : Series<WantedLength, {tuple: [...Previous['tuple'], unknown], payload: Payload}>;

type NumberRange<L extends number, H extends number> = L | Exclude<Series<H>, Series<L>>;
