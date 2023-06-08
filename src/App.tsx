import './styles/App.scss';
import { ProductCard } from './components/productCard/productCard';
import iphone from './img/iphone.png';

const App = () => (
  <div className="App">
    <h1>Phone Catalog</h1>
    <ProductCard
      imgURL={iphone}
      price={800}
      title="Smartfon APPLE iPhone 14 Pro Max 128GB 5G 6.7 120Hz"
      oldPrice={999}
      screen="5.8"
      capacity={64}
      ram={4}
    />
  </div>
);

export default App;
