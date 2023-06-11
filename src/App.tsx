import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer';
import './styles/App.scss';
import Catalog from './pages/Catalog';
import Product from './pages/Product';
import FavouritePage from './pages/FavouritePage';
import Cart from './pages/Cart';
import PageNotFound from './pages/PageNotFound';
import HomePage from './pages/HomePage';
import ProductsProvider from './providers/ProductsProvider';

const App = () => (
  <ProductsProvider>
    <div className="App">
      <header>
        <h1>Here must be header</h1>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/category">
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
  </ProductsProvider>
);

export default App;
