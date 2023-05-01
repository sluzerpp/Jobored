import { FilterParams, IVacancy } from 'shared/api';


export type VacanciesState = {
  vacancies: IVacancy[],
  isLoading: boolean,
  params?: FilterParams
}

export type SearchState = {
  search: string,
}

export type AppContextValue = {
  useFetchVacancies: (params: FilterParams) => (boolean | IVacancy[])[],
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>,
}
