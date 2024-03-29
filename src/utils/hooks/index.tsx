'use client'

import { useState, useEffect, useCallback, useLayoutEffect } from 'react';
import { TypedUseSelectorHook, useSelector, createSelectorHook } from 'react-redux';

import { store } from '@/ReduxRoot';

type themeType = 'dark' | 'light';

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

export function useThemeMode(themeMode: themeType): [themeType, (() => void)] {
  const [theme, setTheme] = useState<themeType>(themeMode);
  const [themeStorage, setThemeStorage] = useLocalStorage('theme', themeMode)
  const setMode = (mode: themeType) => {
    setThemeStorage(mode);
    setTheme(mode)
  }

  const toggleTheme = () => {
    theme === 'dark' ? setMode('light') : setMode('dark')
  }

  useEffect(() => {
    themeStorage ? setMode(themeStorage) : setMode('dark');
  }, []);

  return [theme, toggleTheme];
}

export const useTypedSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;


