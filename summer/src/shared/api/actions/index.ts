import { CLIENT_HR, CLIENT_ID, CLIENT_LOGIN, CLIENT_PASSWORD, CLIENT_SECRET } from 'shared/constants';
import { $authHost, FilterParams, IToken, IVacanciesResponse, IVacancy } from '..';

export const fetchVacancies = async (params?: FilterParams) => {
  let route = '/vacancies?published=1';
  if (params) {
    const { catalogues, keyword, payment_from, payment_to, page } = params;
    route += !catalogues ? '' : `&catalogues=${catalogues}`;
    route += !keyword ? '' : `&keyword=${keyword}`;
    route += !payment_from ? '' : `&payment_from=${payment_from}`;
    route += !payment_to ? '' : `&payment_to=${payment_to}`;
    route += !page ? '' : `&page=${page}`;
  }
  const response = await $authHost.get<IVacanciesResponse>(route, {
    method: 'GET',
  });
  return response.data;
};

export const fetchOneVacancy = async (id: number) => {
  const response = await $authHost.get<IVacancy>(`/vacancies/${id}`, {
    method: 'GET',
  });
  return response.data;
};

export const fetchAuthToken = async () => {
  let route = '/oauth2/password?';
  route += `&login=${CLIENT_LOGIN}`;
  route += `&password=${CLIENT_PASSWORD}`;
  route += `&client_id=${CLIENT_ID}`;
  route += `&client_secret=${CLIENT_SECRET}`;
  route += `&hr=${CLIENT_HR}`;
  const response = await $authHost.get<IToken>(route, {
    method: 'GET',
  });
  return response.data;
};

export const fetchUpdateToken = async (refresh_token: string) => {
  let route = '/oauth2/refresh_token/?';
  route += `&refresh_token=${refresh_token}`;
  route += `&client_id=${CLIENT_ID}`;
  route += `&client_secret=${CLIENT_SECRET}`;
  const response = await $authHost.get<IToken>(route, {
    method: 'GET',
  })
  return response.data;
}
