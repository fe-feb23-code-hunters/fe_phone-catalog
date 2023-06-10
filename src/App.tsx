import { Routes, Route, Navigate } from 'react-router-dom';
// import { BurgerMenu } from './components/BurgerMenu';
import { Footer } from './components/Footer';
import './styles/App.scss';
import { Catalog } from './Pages/Catalog';
import { Product } from './Pages/Product';
import { FavouritePage } from './Pages/FavouritePage';
import { Cart } from './Pages/Cart';
import { PageNotFound } from './Pages/PageNotFound';
import { HomePage } from './Pages/HomePage';

const App = () => (
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
);

export default App;
