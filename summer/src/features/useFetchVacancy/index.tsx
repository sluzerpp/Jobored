import { useEffect, useState } from 'react';
import { IVacancy, fetchOneVacancy } from 'shared/api';

export const useFetchVacancy = (id: number) => {
  const [loading, setLoading] = useState(false);
  const [vacancy, setVacancy] = useState<IVacancy>();
  
  useEffect(() => {
    setLoading(true);
    fetchOneVacancy(id)
      .then((val) => {
        setVacancy(val);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id])

  return { loading, vacancy }
}
