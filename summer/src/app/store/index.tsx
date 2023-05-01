import React, { createContext, useState } from 'react';
import { AppContextValue } from './types';
import { useVacanciesStore } from './hooks';

export const AppContext = createContext<AppContextValue>({
  useFetchVacancies: () => [],
  search: '',
  setSearch: () => [],
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const useFetchVacancies = useVacanciesStore();

  const [search, setSearch] = useState('');

  return (
    <AppContext.Provider value={
      {
        useFetchVacancies,
        search,
        setSearch
      }
    }>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
