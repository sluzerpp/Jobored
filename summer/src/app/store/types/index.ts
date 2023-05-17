import { FilterParams, ICatalog, IVacancy } from 'shared/api';


export type VacanciesState = {
  vacancies: IVacancy[],
  isLoading: boolean,
  params?: FilterParams,
  total: number,
}

export type SearchState = {
  search: string,
}

export type CataloguesState = {
  catalogues: ICatalog[],
  isLoading: boolean,
}

export type AppContextValue = {
  useFetchVacancies: (params: FilterParams) => VacanciesState,
  useFetchCatalogues: () => CataloguesState,
  search: string,
  params: FilterParams,
  setParams: React.Dispatch<React.SetStateAction<FilterParams>>,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
  
}

