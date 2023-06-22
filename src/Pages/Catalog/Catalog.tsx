/* eslint-disable max-len */

import { useContext, useEffect } from 'react';
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
import Loader from '../../components/shared/Loader';
import { SortBy } from '../../types/sortBy';
import { NoProductsFound } from '../../components/NoProductsFound';

const {
  container,
  grid,
  icon,
  title,
  text,
  catalog,
  loader,
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

const SORT_OPTIONS = [
  { value: SortBy.NEWEST, label: 'Newest' },
  { value: SortBy.OLDEST, label: 'Oldest' },
  { value: SortBy.HIGH_PRICE, label: 'High price' },
  { value: SortBy.LOW_PRICE, label: 'Low price' },
];

const ITEMS_OPTIONS = [
  { value: 16, label: '16' },
  { value: 32, label: '32' },
  { value: 48, label: '48' },
];

const Catalog: React.FC = () => {
  const {
    products,
    isLoading,
    handleSortByChange,
    sortBy,
    handleLimitChange,
    limit,
    handlePageChange,
    page,
    totalPages,
  } = useContext(ProductsContext);

  const selectedSortByOption = SORT_OPTIONS.find(
    (option) => option.value === sortBy,
  ) as DropdownOption;

  const selectedQuantityOption = ITEMS_OPTIONS.find(
    (option) => option.value === limit,
  ) as DropdownOption;

  const onDropdownChange = (newOption: DropdownOption) => {
    handleSortByChange(newOption.value);
  };

  const onDropdownChangeItems = (newOption: DropdownOption) => {
    handleLimitChange(newOption.value);
  };

  const handlePagination = (newPage: number) => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    setTimeout(() => {
      handlePageChange(newPage);
    }, 800);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

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
              <ForwardButton label="Phones" />
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

      {!isLoading && !products.length && <NoProductsFound />}

      {(isLoading || products.length > 0) && (
        <>
          {isLoading && <Loader className={loader} />}

          {!isLoading && (
            <>
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
                      selectedOption={selectedSortByOption}
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
                      selectedOption={selectedQuantityOption}
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
                    itemId={product.itemId}
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
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePagination}
              />
            </>
          )}
        </>
      )}
    </>
  );
};

export default Catalog;
