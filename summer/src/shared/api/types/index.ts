export type IVacancy = {
  id: number,
  profession: string,
  payment_from: number,
  town: {
    title: string,
  },
  vacancyRichText: string,
  type_of_work: {
    title: string,
  },
}

export type IToken = {
  access_token: string,
  token_type: string,
}

export type FilterParams = {
  keyword?: string,
  payment_from?: number,
  payment_to?: number,
  catalogues?: number,
  page?: number,
}

export type IVacanciesResponse = {
  objects: IVacancy[],
  total: number,
}

export type ICatalog = {
  title_rus: string;
  key: number;
}