import Header from 'widgets/Header';
import { Routing } from '../pages';
import { useAuth } from './hooks/useAuth';
import './index.scss';
import { withProviders } from './providers';
import { Spinner } from 'shared/ui';

const App = () => {
  const isAuth = useAuth();

  return (
    isAuth
    ? (
      <div className='app'>
        <Header></Header>
        <Routing></Routing>
      </div>
    )
    : <Spinner></Spinner>
  )
}

const WrappedApp = withProviders(App);

export default WrappedApp;
