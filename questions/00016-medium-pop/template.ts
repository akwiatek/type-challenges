type Pop<T extends unknown[]> = T extends [...(infer F), unknown] ? F : [];
