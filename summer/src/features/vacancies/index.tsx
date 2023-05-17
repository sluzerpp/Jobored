import { Pagination } from '@mantine/core';
import { useEffect, useState } from 'react';
import { FilterParams, IVacancy } from 'shared/api';
import { SearchBar } from 'shared/ui';
import './index.scss';
import { Spinner } from 'shared/ui/';
import { VacancyCard } from 'entities/VacancyCard';

type VacanciesFeatureProps = {
  setParams: React.Dispatch<React.SetStateAction<FilterParams>>;
  isLoading: boolean,
  total: number,
  vacancies: IVacancy[],
}

export const VacanciesFeature = ({ isLoading, total, vacancies, setParams }: VacanciesFeatureProps) => {
  const [activePage, setPage] = useState(1);

  let pagesCount = Math.ceil(total / 20);
  pagesCount = pagesCount > 25 ? 25 : pagesCount;

  const data = localStorage.getItem('vacancies');

  const [savedVacancies, setSavedVacancies] = useState<IVacancy[]>(data ? JSON.parse(data) : []);

  const createOnSaveButtonClickHandler = (vacancy: IVacancy) => () => {
    const candidate = savedVacancies.find((el) => el.id === vacancy.id);
    if (candidate) {
      setSavedVacancies(savedVacancies.filter((el) => el.id !== vacancy.id));
    } else {
      setSavedVacancies([...savedVacancies, vacancy])
    }
  };

  useEffect(() => {
    localStorage.setItem('vacancies', JSON.stringify(savedVacancies));
  }, [savedVacancies])

  const searchSubmitHandler = (search?: string) => {
    setParams((prev) => ({
      ...prev,
      keyword: search,
      page: 1,
    }))
    setPage(1);
  }

  const onPageChangeHandler = (value: number) => {
    setPage(value);
    setParams((prev) => ({
      ...prev,
      page: value,
    }));
  }

  return (
    <div className='vacancies-feature'>
      <div className="vacancies__search">
        <SearchBar onSubmit={searchSubmitHandler}></SearchBar>
      </div>
      <div className="vacancies__items">
        {
          !isLoading
          ? !(vacancies.length === 0) 
          ? vacancies.map((vacancy) => (
            <VacancyCard
              key={vacancy.id}
              vacancy={vacancy}
              onSaveButton={createOnSaveButtonClickHandler(vacancy)}
              isSave={Boolean(savedVacancies.find((el) => el.id === vacancy.id))}
            ></VacancyCard>
          ))
          : <h2>Ничего не найдено!</h2>
          : <Spinner></Spinner>
        }
      </div>
      <div className="vacancies__pagination">
        <Pagination value={activePage} onChange={onPageChangeHandler} siblings={1} total={pagesCount} />
      </div>
    </div>
  )
}
