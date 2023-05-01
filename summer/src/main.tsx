import ReactDOM from 'react-dom/client';
import App from './app';
import AppProvider from './app/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <App></App>
  </AppProvider>,
)
