import { AppContext } from 'app/store'
import { useContext, useState } from 'react'
import { FilterParams } from 'shared/api';

export const VacanciesWidget = () => {
  const { useFetchVacancies } = useContext(AppContext);
  const [params, setParams] = useState<FilterParams>({});
  const [loading, vacancies] = useFetchVacancies(params);

  return (
    loading
    ? <h2>vacancies loading</h2>
    : <div>{JSON.stringify(vacancies)}</div>
  )
}
