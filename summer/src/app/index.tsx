import Header from 'widgets/Header';
import { Routing } from '../pages';
import { useAuth } from './hooks/useAuth';
import './index.scss';
import { withProviders } from './providers';

const App = () => {
  const isAuth = useAuth();

  return (
    isAuth
    ? (
      <>
        <Header></Header>
        <Routing></Routing>
      </>
    )
    : <h2>Loading...</h2>
  )
}

const WrappedApp = withProviders(App);

export default WrappedApp;
