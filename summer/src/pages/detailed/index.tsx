import { DetailedVacancy } from 'features/DetailedVacancy';
import { useParams } from 'react-router';
import './index.scss';
import { useFetchVacancy } from 'features/useFetchVacancy';
import { Spinner } from 'shared/ui';

const Detailed = () => {
  const params = useParams();
  const id = Number(params.id);
  
  const { loading, vacancy } = useFetchVacancy(id);

  return (
    <div className="container container--small">
      <div className='detailed'>
        {
          (!loading) 
          ? (vacancy)
          ? <DetailedVacancy vacancy={vacancy}></DetailedVacancy>
          : <h2>Вакансия не найдена!</h2>
          : <Spinner></Spinner>
        }
      </div>
    </div>
  )
}

export default Detailed;