/* eslint-disable max-len */

import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import classes from './catalog.module.scss';
import Home from '../../icons/Home/Home';
import Dropdown from '../../components/shared/Dropdown/Dropdown';
import { DropdownOption } from '../../types/common';
import ProductCard from '../../components/productCard';
import Pagination from '../../components/shared/Pagination';
import ForwardButton from '../../components/shared/buttons/ForwardButton/ForwardButton';
import { ProductsContext } from '../../providers/ProductsProvider/ProductsProvider';

const SORT_OPTIONS = [
  { value: 'option1', label: 'Newest' },
  { value: 'option2', label: 'High price' },
  { value: 'option3', label: 'Low price' },
];

const ITEMS_OPTIONS = [
  { value: 'option1', label: '16' },
  { value: 'option2', label: '32' },
  { value: 'option3', label: '48' },
];

const Catalog: React.FC = () => {
  const {
    container,
    grid,
    icon,
    title,
    text,
    catalog,
    grid__desktop: gridDesktop,
    grid__tablet: gridTablet,
    grid__mobile: gridMobile,
    grid__item: gridItem,
    grid__item__mobile_1_4: gridMobileFullSize,
    grid__item__tablet_1_12: gridTabletFullSize,
    grid__item__desktop_1_24: gridDesktopFullSize,
    grid__item__mobile_1_2: gridMobileStart,
    grid__item__tablet_1_4: gridTabletStart,
    grid__item__desktop_1_4: gridDesktopStart,
    grid__item__mobile_3_4: gridMobileEnd,
    grid__item__tablet_5_7: gridTabletQuarter,
    grid__item__desktop_5_7: gridDesktopQuarter,
    icon__history: iconHistory,
    container__center: containerCenter,
    container__top: containerTop,
    section__margin: sectionMargin,
    container__margin_text: textMargin,
    option__margin: optionMargin,
  } = classes;

  const { products } = useContext(ProductsContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOptionSort, setSelectedOptionSort] = useState<DropdownOption>(
    SORT_OPTIONS[0],
  );

  const onDropdownChange = (newOption: DropdownOption) => {
    setSelectedOptionSort(newOption);
  };

  const [selectedItems, setSelectedOptionItems] = useState<DropdownOption>(
    ITEMS_OPTIONS[0],
  );

  const onDropdownChangeItems = (newOption: DropdownOption) => {
    setSelectedOptionItems(newOption);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = 10;

  return (
    <>
      <div className={cn(container, containerTop)}>
        <div className={cn(grid, gridDesktop, gridTablet, gridMobile)}>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopFullSize,
              iconHistory,
            )}
          >
            <div className={containerCenter}>
              <Link to="/" className={icon}>
                <Home />
              </Link>
              <ForwardButton onClick={() => 'click me'} label="Phones" />
            </div>
          </div>
        </div>
      </div>

      <div className={cn(container, sectionMargin)}>
        <div className={cn(grid, gridDesktop, gridTablet, gridMobile)}>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopFullSize,
            )}
          >
            <h1 className={title}>Mobile phones</h1>
          </div>
        </div>
      </div>

      <div className={cn(container, textMargin)}>
        <div className={cn(grid, gridMobile, gridTablet, gridDesktop)}>
          <div
            className={cn(
              gridItem,
              gridMobileFullSize,
              gridTabletFullSize,
              gridDesktopFullSize,
            )}
          >
            <p className={text}>{`${products.length} models`}</p>
          </div>
        </div>
      </div>

      <div className={cn(container, textMargin, optionMargin)}>
        <div className={cn(grid, gridDesktop, gridTablet, gridMobile)}>
          <div
            className={cn(
              gridItem,
              gridMobileStart,
              gridTabletStart,
              gridDesktopStart,
            )}
          >
            <Dropdown
              options={SORT_OPTIONS}
              selectedOption={selectedOptionSort}
              onChange={onDropdownChange}
              label="Sort by"
            />
          </div>
          <div
            className={cn(
              gridItem,
              gridMobileEnd,
              gridTabletQuarter,
              gridDesktopQuarter,
            )}
          >
            <Dropdown
              options={ITEMS_OPTIONS}
              selectedOption={selectedItems}
              onChange={onDropdownChangeItems}
              label="Items on page"
            />
          </div>
        </div>
      </div>
      <div className={cn(catalog)}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.name}
            imgURL={product.image}
            price={product.price}
            oldPrice={product.fullPrice}
            screen={product.screen}
            capacity={product.capacity}
            ram={product.ram}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Catalog;
