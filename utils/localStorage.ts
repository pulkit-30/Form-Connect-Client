export const keyPrefix = "atlan-";

export const setItem = (key: string, data: any) => {
  window.localStorage.setItem(`${keyPrefix}${key}`, JSON.stringify(data));
};

export const getItem = (key: string, defaultValue: any = null) => {
  try {
    const data = window
      ? window.localStorage.getItem(`${keyPrefix}${key}`)
      : null;
    return data !== null && data !== "null" ? JSON.parse(data) : defaultValue;
  } catch {
    return defaultValue;
  }
};

export const matchKeys = (key: string, keyWithPrefix: string) =>
  `${keyPrefix}${key}` === `${keyWithPrefix}`;
