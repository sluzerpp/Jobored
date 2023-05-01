import { useEffect, useReducer } from 'react';
import { VacanciesState } from '../types';
import { FilterParams, fetchVacancies } from 'shared/api';

export const useVacanciesStore = () => {
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
  const useFetchVacancies = (params: FilterParams) => {
    useEffect(() => {
      if (JSON.stringify(vacancies.params) === JSON.stringify(params)) {
        return;
      }
      setVacancies({isLoading: true, params});
      fetchVacancies(params).then((val) => {
        setVacancies({ vacancies: val.objects, isLoading: false });
      })
    }, [params]);

    return [vacancies.isLoading, vacancies.vacancies];
  }

  return useFetchVacancies;
}