import { AppContext } from 'app/store'
import { FiltersFeature } from 'features/Filters';
import { useContext, useState } from 'react'
import { FilterParams } from 'shared/api';
import './index.scss';
import { VacanciesFeature } from 'features/vacancies';

export const VacanciesWidget = () => {
  const { useFetchVacancies } = useContext(AppContext);
  const [params, setParams] = useState<FilterParams>({});
  const [loading, vacancies] = useFetchVacancies(params);

  console.log(loading);

  return (
    <div className="vacancies-widget">
      <FiltersFeature selectOptions={[{ value: '1', label: 'Lox' }]} params={params} setParams={setParams}></FiltersFeature>
      <VacanciesFeature></VacanciesFeature>
    </div> 
  )
}
