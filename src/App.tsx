import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer';
import './styles/App.scss';
import HomePage from './Pages/HomePage';
import Catalog from './Pages/Catalog';
import Product from './Pages/Product';
import FavouritePage from './Pages/FavouritePage';
import Cart from './Pages/Cart';
import PageNotFound from './Pages/PageNotFound';
import AppProvider from './providers/AppProvider';

const App = () => (
  <AppProvider>
    <div className="App">
      <header>
        <h1>Here must be header</h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/catalog">
            <Route index element={<Catalog />} />
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/favourites" element={<FavouritePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  </AppProvider>
);

export default App;
