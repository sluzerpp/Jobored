import { InternalAxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { $authHost, fetchAuthToken } from 'shared/api';

export const useAuth = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    fetchAuthToken().then((token) => {
      $authHost.interceptors.request.use((config: InternalAxiosRequestConfig) => {
        config.headers.set('Authorization', `${token.token_type} ${token.access_token}`);
        return config;
      });
      setIsAuth(true);
    });
  }, [])

  return isAuth;
};
