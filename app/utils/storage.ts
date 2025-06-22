const isBrowser = typeof window !== "undefined";

const saveToLocalStorage = (key: string, value: string) => {
  if (isBrowser) {
    localStorage.setItem(key, value);
  }
};

const getFromLocalStorage = (key: string): string => {
  if (isBrowser) {
    return localStorage.getItem(key) || "";
  }
  return "";
};

export const saveEmailToLocalStorage = (email: string) => {
  saveToLocalStorage("email", email);
};

export const getEmailFromLocalStorage = (): string => {
  return getFromLocalStorage("email");
};
