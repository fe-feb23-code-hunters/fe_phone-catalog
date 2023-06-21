import { Routes, Route, Navigate } from 'react-router-dom';
import './styles/App.scss';
import HomePage from './Pages/HomePage';
import Catalog from './Pages/Catalog';
import ProductDetails from './Pages/ProductDetails';
import FavouritePage from './Pages/FavouritePage';
import Cart from './Pages/Cart';
import PageNotFound from './Pages/PageNotFound';
import AppProvider from './providers/AppProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import TabletsPage from './Pages/TabletsPage/TabletsPage';
import Accessories from './Pages/Accessories';
import Contacts from './Pages/Contacts/Contacts';

const App = () => (
  <AppProvider>
    <Header />

    <main className="mainContainer">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route path="/phones">
          <Route index element={<Catalog />} />
          <Route path=":productId" element={<ProductDetails />} />
        </Route>

        <Route path="/favourites" element={<FavouritePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/tablets" element={<TabletsPage />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>

    <Footer />
  </AppProvider>
);

export default App;
