import axios, { InternalAxiosRequestConfig } from 'axios';

const BASE_URL = 'https://startup-summer-2023-proxy.onrender.com/2.0';

export const $authHost = axios.create({
  baseURL: BASE_URL
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  config.headers.set('x-secret-key', 'GEU4nvd3rej*jeh.eqp');
  config.headers.set('X-Api-App-Id', 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948');
  return config;
}

$authHost.interceptors.request.use(authInterceptor);