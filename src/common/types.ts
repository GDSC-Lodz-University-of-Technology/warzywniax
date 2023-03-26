type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

export type ObjectFieldPaths<T> = T extends object
  ? {
      [K in keyof T]-?: K extends string | number ? K | Join<K, ObjectFieldPaths<T[K]>> : never;
    }[keyof T]
  : '';
