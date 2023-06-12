import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.scss';
import HomePage from './Pages/HomePage';
import Catalog from './Pages/Catalog';
import Product from './Pages/Product';
import FavouritePage from './Pages/FavouritePage';
import Cart from './Pages/Cart';
import PageNotFound from './Pages/PageNotFound';
import AppProvider from './providers/AppProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => (
  <AppProvider>
    <div className="App">
      <Header />

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

      <Footer />
    </div>
  </AppProvider>
);

export default App;
