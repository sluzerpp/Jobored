import React, { createContext, useState } from 'react';
import { AppContextValue, CataloguesState, VacanciesState } from './types';
import { useCataloguesStore, useVacanciesStore } from './hooks';
import { FilterParams } from 'shared/api';

export const AppContext = createContext<AppContextValue>({
  useFetchVacancies: (): VacanciesState => ({
    total: 0,
    vacancies: [],
    isLoading: false,
  }),
  useFetchCatalogues: (): CataloguesState => ({
    isLoading: false,
    catalogues: [],
  }),
  params: {},
  setParams: () => [],
  search: '',
  setSearch: () => [],
});

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const useFetchVacancies = useVacanciesStore();
  const useFetchCatalogues = useCataloguesStore();

  const [search, setSearch] = useState('');
  const [params, setParams] = useState<FilterParams>({});

  return (
    <AppContext.Provider value={
      {
        useFetchCatalogues,
        useFetchVacancies,
        search,
        setSearch,
        params,
        setParams
      }
    }>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
