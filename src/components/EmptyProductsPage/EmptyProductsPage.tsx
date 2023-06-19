/* eslint-disable max-len */
import EmptyBag from '../../icons/EmptyBag';
import classes from './EmptyProductsPage.module.scss';

const {
  container,
  'empty-page': emptyPage,
  'empty-page__photo': emptyPagePhoto,
  'empty-page__info': emptyPageInfo,
  'empty-page__title': emptyPageTitle,
  'empty-page__text': emptyPageText,
} = classes;

export const EmptyProductsPage = () => {
  return (
    <div className={container}>
      <div className={emptyPage}>
        <EmptyBag className={emptyPagePhoto} />
      </div>
      <div className={emptyPageInfo}>
        <h2 className={emptyPageTitle}>
          No products yet!
        </h2>
        <p className={emptyPageText}>
          We are busy sourcing the best items for you. Check back soon for new additions!
        </p>
      </div>
    </div>
  );
};
