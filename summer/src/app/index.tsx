import { Routing } from '../pages';
import './index.scss';
import { withProviders } from './providers';

const App = () => {
  return (
    <Routing></Routing>
  )
}

const WrappedApp = withProviders(App);

export default WrappedApp;
