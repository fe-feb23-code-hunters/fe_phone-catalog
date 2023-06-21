import classes from './EmptyPage.module.scss';

const {
  container,
  'empty-page': emptyPage,
  // 'empty-page__photo': emptyPagePhoto,
  'empty-page__info': emptyPageInfo,
  'empty-page__title': emptyPageTitle,
  'empty-page__text': emptyPageText,
} = classes;

interface Props {
  children: React.ReactNode;
  pageTitle: string;
  pageText: string;
}

export const EmptyPage: React.FC<Props> = ({
  children,
  pageTitle,
  pageText,
}) => {
  return (
    <div className={container}>
      <div className={emptyPage}>
        {children}
      </div>
      <div className={emptyPageInfo}>
        <h2 className={emptyPageTitle}>
          {pageTitle}
        </h2>
        <p className={emptyPageText}>
          {pageText}
        </p>
      </div>
    </div>
  );
};
