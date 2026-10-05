import { useCallback, useState } from "react";

export function useSessionStorage(key: string) {
  const [value, setValue] = useState(() => {
    try {
      return sessionStorage.getItem(key) === "true";
    } catch {
      return false;
    }
  });

  const setStoredValue = useCallback(
    (nextValue: boolean) => {
      setValue(nextValue);
      try {
        sessionStorage.setItem(key, String(nextValue));
      } catch {
        // nothing for now
      }
    },
    [key],
  );

  return [value, setStoredValue] as const;
}
