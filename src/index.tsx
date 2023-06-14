import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { HashRouter } from 'react-router-dom';
import App from './App';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <HashRouter>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </HashRouter>,
);
