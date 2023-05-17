import { AppContext } from 'app/store'
import { FiltersFeature } from 'features/Filters';
import { useContext } from 'react'
import './index.scss';
import { VacanciesFeature } from 'features/vacancies';

export const VacanciesWidget = () => {
  const { useFetchVacancies, params, setParams, useFetchCatalogues } = useContext(AppContext);
  const fetchedVacanciesData = useFetchVacancies(params);
  const fetchedCataloguesData = useFetchCatalogues();

  return (
    <div className="vacancies-widget">
      <FiltersFeature cataloguesData={fetchedCataloguesData} params={params} setParams={setParams}></FiltersFeature>
      <VacanciesFeature {...fetchedVacanciesData} setParams={setParams}></VacanciesFeature>
    </div> 
  )
}
