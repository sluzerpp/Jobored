import { useEffect, useReducer } from 'react';
import { CataloguesState, VacanciesState } from '../types';
import { FilterParams, fetchCatalogues, fetchVacancies } from 'shared/api';

export const useVacanciesStore = () => {
  const [vacancies, setVacancies] = useReducer(
    (state: VacanciesState, newState: Partial<VacanciesState>) => ({
      ...state,
      ...newState,
    }),
    {
      vacancies: [],
      isLoading: false,
      total: 0,
    }
  );
  const useFetchVacancies = (params: FilterParams) => {
    useEffect(() => {
      if (JSON.stringify(vacancies.params) === JSON.stringify(params)) {
        return;
      }
      setVacancies({isLoading: true, params});
      fetchVacancies(params).then((val) => {
        setVacancies({ vacancies: val.objects, isLoading: false, total: val.total });
      })
    }, [params]);

    return {
      isLoading: vacancies.isLoading,
      vacancies: vacancies.vacancies,
      total: vacancies.total,
    };
  }

  return useFetchVacancies;
}

export const useCataloguesStore = () => {
  const [catalogues, setCatalogues] = useReducer(
    (state: CataloguesState, newState: Partial<CataloguesState>) => ({
      ...state,
      ...newState,
    }),
    {
      catalogues: [],
      isLoading: false,
    }
  );
  const useFetchCatalogues = (): CataloguesState => {
    useEffect(() => {
      setCatalogues({isLoading: true});
      fetchCatalogues().then((val) => {
        setCatalogues({ catalogues: val, isLoading: false });
      })
    }, []);

    return {
      isLoading: catalogues.isLoading,
      catalogues: catalogues.catalogues,
    };
  }

  return useFetchCatalogues;
}