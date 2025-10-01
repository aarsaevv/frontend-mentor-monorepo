const isClient = typeof window !== 'undefined';
const isServer = !isClient;

type DefaultLocalStorageMap = Record<string, unknown>;

export interface LocalStorageValue<TMap extends DefaultLocalStorageMap> {
  value: TMap[keyof TMap];
  expires?: number;
}

interface LocalStorage<
  TKey extends string = string,
  TMap extends DefaultLocalStorageMap = DefaultLocalStorageMap,
> {
  setValue(key: TKey, item: LocalStorageValue<TMap>): void;

  remove(key: TKey): void;

  getValue(key: TKey, defaultValue?: TMap[TKey]): LocalStorageValue<TMap> | undefined;
}

const mocks: LocalStorage = {
  setValue: (key: string, item: LocalStorageValue<DefaultLocalStorageMap>) => {
    console.warn(`Calling setValue ${key} with value ${item} on server.`);
  },
  getValue: <T extends string>(
    key: T,
    item: DefaultLocalStorageMap[T],
  ): LocalStorageValue<DefaultLocalStorageMap> | undefined => {
    console.warn(`Calling getValue ${key} with value ${item} on server.`);
    return undefined;
  },
  remove: <T extends string>(key: T) => {
    console.warn(`Calling remove ${key}`);
  },
};

export default function LocalStorage<
  TKey extends string = string,
  TMap extends DefaultLocalStorageMap = DefaultLocalStorageMap,
>(): LocalStorage<TKey, TMap> {
  if (isServer) {
    return mocks as LocalStorage<TKey, TMap>;
  }

  const remove = (key: TKey): void => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  };

  const setValue = (key: TKey, item: LocalStorageValue<TMap>) => {
    try {
      const expires = Date.now() + (item.expires || 0) * 1000;
      const stringified = JSON.stringify({ ...item, expires: item.expires ? expires : undefined });

      window.localStorage.setItem(key, stringified);
    } catch (error) {
      console.log(error);
    }
  };

  const getValue = (key: TKey, defaultValue?: TMap[TKey]): LocalStorageValue<TMap> | undefined => {
    try {
      const item = window.localStorage.getItem(key);

      if (!item) {
        return undefined;
      }

      const value: LocalStorageValue<TMap> = JSON.parse(item);

      if (!value.expires) {
        return value;
      }

      const now = Date.now();

      if (now > value.expires) {
        remove(key);
        return undefined;
      }

      return value;
    } catch (err) {
      console.log(err);

      if (defaultValue) {
        return {
          value: defaultValue,
        };
      }

      return undefined;
    }
  };

  return {
    remove,
    setValue,
    getValue,
  };
}
