import { useEffect, useState } from 'react';
import { IVacancy } from 'shared/api';
import { DetailedHeader } from './DetailedHeader';
import { DetailedDescription } from './DetailedDescription';

type DetailedVacancyProps = {
  vacancy: IVacancy;
}

export const DetailedVacancy = ({ vacancy }: DetailedVacancyProps) => {
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

  return (
    <>
      <DetailedHeader
        vacancy={vacancy}
        onSaveClick={createOnSaveButtonClickHandler(vacancy)}
        isSave={Boolean(savedVacancies.find((el) => el.id === vacancy.id))}
      ></DetailedHeader>
      <DetailedDescription text={vacancy.vacancyRichText}></DetailedDescription>
    </>
  )
}
