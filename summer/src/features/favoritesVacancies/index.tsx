import { Pagination } from '@mantine/core';
import { VacancyCard } from 'entities/VacancyCard';
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { IVacancy } from 'shared/api';
import svg from 'shared/assets/Frame.svg';
import './index.scss';

export const FavoritesVacancies = () => {
  const [activePage, setPage] = useState(1);

  const data = localStorage.getItem('vacancies');

  const [savedVacancies, setSavedVacancies] = useState<IVacancy[]>(data ? JSON.parse(data) : []);

  let pagesCount = Math.ceil(savedVacancies.length / 4);
  pagesCount = pagesCount > 125 ? 125 : pagesCount;

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

  const onPageChangeHandler = (value: number) => {
    setPage(value);
  }

  return (
    <div className='vacancies-feature'>
      <div className="vacancies__items">
        {
          !(savedVacancies.length === 0) 
          ? savedVacancies
              .slice((activePage - 1) * 4, activePage * 4)
              .map((vacancy) => (
                <VacancyCard
                  key={vacancy.id}
                  vacancy={vacancy}
                  onSaveButton={createOnSaveButtonClickHandler(vacancy)}
                  isSave={Boolean(savedVacancies.find((el) => el.id === vacancy.id))}
                ></VacancyCard>
              ))
          : (
            <div className="vacancies__not-found">
              <img src={svg} alt='not found' />
              <h2>Упс, здесь ещё ничего нет!</h2>
              <NavLink to={'/'} className="vacancies__navigate">Поиск вакансий</NavLink>
            </div>
          )
        }
      </div>
      <div className="vacancies__pagination">
        <Pagination value={activePage} onChange={onPageChangeHandler} siblings={1} total={pagesCount} />
      </div>
    </div>
  )
}
