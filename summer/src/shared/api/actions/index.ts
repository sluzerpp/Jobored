import { $authHost, FilterParams, IToken, IVacanciesResponse, IVacancy } from '..';

export const fetchVacancies = async (params?: FilterParams) => {
  let route = '/vacancies?published=1';
  if (params) {
    const { catalogues, keyword, payment_from, payment_to } = params;
    route += !catalogues ? '' : `&catalogues=${catalogues}`;
    route += !keyword ? '' : `&keyword=${keyword}`;
    route += !payment_from ? '' : `&payment_from=${payment_from}`;
    route += !payment_to ? '' : `&payment_to=${payment_to}`;
  }
  const response = await $authHost.get<IVacanciesResponse>(route, {
    method: 'GET',
  });
  return response.data;
};

export const fetchVacancy = async (id: number) => {
  const response = await $authHost.get<IVacancy>(`/vacancies/${id}`, {
    method: 'GET',
  });
  return response.data;
};

export const fetchAuthToken = async () => {
  let route = '/oauth2/password?';
  route += '&login=sergei.stralenia@gmail.com';
  route += '&password=paralect123';
  route += '&client_id=2356';
  route += '&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948';
  route += '&hr=0';
  const response = await $authHost.get<IToken>(route, {
    method: 'GET',
  });
  return response.data;
};
