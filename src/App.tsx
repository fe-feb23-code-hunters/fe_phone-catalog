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
import BackButton from './components/shared/buttons/BackButton';

const App = () => (
  <AppProvider>
    <Header />
    <BackButton
      onClick={() => {
        'hello';
      }}
    />

    <main className="mainContainer">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/phones">
          <Route index element={<Catalog />} />
          <Route path=":productId" element={<Product />} />
        </Route>

        <Route path="/favourites" element={<FavouritePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>

    <Footer />
  </AppProvider>
);

export default App;
