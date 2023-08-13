/**
 * Copyright (C) 2023 dahliaOS
 *
 * This file is part of dahliaOS.
 */
import { useEffect, useState } from 'react';
import { ThemeTypes } from '@/types/types';

export const usePreferredTheme = (): ThemeTypes => {
  const [theme, setTheme] = useState<ThemeTypes>('dark');

  useEffect(() => {
    const changeTheme = () => {
      let savedTheme = localStorage.getItem('theme');

      if (!savedTheme) {
        localStorage.setItem('theme', 'dark');
        savedTheme = 'dark';
      }

      setTheme(savedTheme as ThemeTypes);
    };

    changeTheme();

    window.addEventListener('storage', changeTheme);

    return () => window.removeEventListener('storage', changeTheme);
  }, []);

  return theme;
};
