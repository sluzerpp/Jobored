import { createContext, useReducer } from 'react';
import { AppContextValue, SearchState, VacanciesState } from './types';

export const AppContext = createContext<AppContextValue | null>(null);

const AppProvider = (component: () => React.ReactNode) => {
  const [vacancies, setVacancies] = useReducer(
    (state: VacanciesState, newState: Partial<VacanciesState>) => ({
      ...state,
      ...newState,
    }),
    {
      vacancies: [],
      isLoading: false,
    }
  );

  const [search, setSearch] = useReducer(
    (state: SearchState, newState: Partial<SearchState>) => ({
      ...state,
      ...newState,
    }),
    {
      search: '',
    }
  );

  return (
    <AppContext.Provider value={
      {
        vacancies,
        setVacancies,
        search,
        setSearch
      }
    }>
      {component()}
    </AppContext.Provider>
  );
};

export default AppProvider;
