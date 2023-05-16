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
      <div className='app'>
        <Header></Header>
        <div className="container">
          <Routing></Routing>
        </div>
      </div>
    )
    : <h2>Loading...</h2>
  )
}

const WrappedApp = withProviders(App);

export default WrappedApp;
