/* eslint-disable max-len */
import { useContext, useState } from 'react';
import cn from 'classnames';
import { ProductsContext } from '../../providers/ProductsProvider/ProductsProvider';
import { CartContext } from '../../providers/CartProvider/CartProvider';
import CategorySection from './CategorySection/CategorySection';
import MainTitle from './MainTitle/MainTitle';
import ColorSelect from '../../components/ColorSelect/ColorSelect';
import { colorSelect } from '../../types/colorSelect';
import classes from './HomePage.module.scss';
import CapacitySelect from '../../components/CapacitySelect/CapacitySelect';
import { Capacity } from '../../types/capacity';

const DUMMY_OPTIONS = [
  { color: '#FCDBC1', title: '#FCDBC1' },
  { color: '#5F7170', title: '#5F7170' },
  { color: '#4C4C4C', title: '#4C4C4C' },
  { color: '#F0F0F0', title: '#F0F0F0' },
];

const DUMMY_CAPACITY = [
  { value: '64GB', title: '64GB' },
  { value: '128GB', title: '128GB' },
  { value: '256GB', title: '256GB' },
];

const HomePage: React.FC = () => {
  const { products } = useContext(ProductsContext);
  const { addToCart } = useContext(CartContext);

  const [selectedOption, setSelectedOption] = useState<colorSelect>(
    DUMMY_OPTIONS[0],
  );

  const onSelectChange = (newOption: colorSelect) => {
    setSelectedOption(newOption);
  };

  const [selectedCapacity, setSelectedCapacity] = useState<Capacity>(
    DUMMY_CAPACITY[0],
  );

  const onCapacityChange = (newOption: Capacity) => {
    setSelectedCapacity(newOption);
  };

  const {
    container,
    grid,
    grid__desktop: gridDesktop,
    grid__tablet: gridTablet,
    grid__mobile: gridMobile,
    grid__item: gridItem,
    grid__item__tablet_8_12: gridTabletEnd,
    grid__item__desktop_14_20: gridDesktopEnd,
    grid__item__mobile_1_4: gridMobileFullSize,
  } = classes;

  return (
    <div>
      <MainTitle />
      {/* Products for review, delete this */}
      {products.map((product: { id: string; name: string }) => (
        <div key={product.id}>
          {product.name}
          <button type="button" onClick={() => addToCart(product.id)}>
            Add to cart
          </button>
        </div>
      ))}
      {/* color picker for review, delete after review */}
      <div className={container}>
        <div className={cn(grid, gridMobile, gridTablet, gridDesktop)}>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletEnd,
              gridDesktopEnd,
            )}
          >
            <ColorSelect
              title="Available colors"
              options={DUMMY_OPTIONS}
              selectedOption={selectedOption}
              onSelect={onSelectChange}
            />
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletEnd,
              gridDesktopEnd,
            )}
          >
            <CapacitySelect
              title="Select capacity"
              values={DUMMY_CAPACITY}
              selectedCapacity={selectedCapacity}
              onSelectCapacity={onCapacityChange}
            />
          </div>
        </div>
      </div>
      <CategorySection />
    </div>
  );
};

export default HomePage;
