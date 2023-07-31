'use client'

import { useState, useEffect, useCallback } from 'react';



export function useLocalStorage<Type>(
  key: string,
  initialValue?: Type
) {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setStoredValue = useCallback(
    (val: React.Dispatch<React.SetStateAction<Type>>) => {
      try {
        const valueToStore = val instanceof Function ? val(value) : val
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      } catch (error) {
        console.log(error)
      }
    },
    [value, key]
  )

  useEffect(() => {
    setStoredValue(value)
  }, [value, setStoredValue])

  return [value, setValue]
}

export function useThemeMode<Type>(themeMode: Type) {
  const [theme, setTheme] = useState<Type>(themeMode);
  const [themeStorage, setThemeStorage] = useLocalStorage('theme', themeMode)

  const setMode = (mode: Type) => {
    setThemeStorage(mode);
    setTheme(mode)
  }

  const toggleTheme = () => {
    // @ts-ignore
    theme === 'dark' ? setMode('light') : setMode('dark')
  }

  useEffect(() => {
    // @ts-ignore
    themeStorage ? setMode(themeStorage) : setMode('dark');
  }, []);

  return [theme, toggleTheme];
}

