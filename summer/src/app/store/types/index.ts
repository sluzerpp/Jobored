import { IVacancy } from '../../api';


export type VacanciesState = {
  vacancies: IVacancy[],
  isLoading: boolean,
}

export type SearchState = {
  search: string,
}

export type AppContextValue = {
  vacancies: VacanciesState,
  setVacancies: React.Dispatch<Partial<VacanciesState>>,
  search: SearchState,
  setSearch: React.Dispatch<Partial<SearchState>>,
}
