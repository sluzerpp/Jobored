import axios, { InternalAxiosRequestConfig } from 'axios';
import { API_SECRET_KEY, BASE_URL, CLIENT_SECRET } from '../../constants';

export const $authHost = axios.create({
  baseURL: BASE_URL,
});

const authInterceptor = (config: InternalAxiosRequestConfig) => {
  config.headers.set('x-secret-key', API_SECRET_KEY);
  config.headers.set('X-Api-App-Id', CLIENT_SECRET);
  return config;
}

$authHost.interceptors.request.use(authInterceptor);