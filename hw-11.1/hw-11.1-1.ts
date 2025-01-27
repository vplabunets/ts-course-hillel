// Завдання #1: DeepMutable

// Створіть тип DeepMutable(аналог DeepReadonly, але у зворотному напрямку),
//     який рекурсивно видаляє readonly з кожної властивості об'єкта, включаючи вкладені об'єкти

type DeepMutable1<T extends object> = {
  -readonly [P in keyof T]: T[P] extends object
    ? T[P] extends (...args: unknown[]) => unknown
      ? T[P]
      : DeepMutable1<T[P]>
    : T[P];
};

type DeepMutable2<T extends object> = {
  -readonly [P in keyof T]: T[P] extends object ? DeepMutable2<T[P]> : T[P];
};
