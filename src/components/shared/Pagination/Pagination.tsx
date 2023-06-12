import React from 'react';
import IconButton from '../buttons/IconButton';
import MoveButton from '../buttons/MoveButton';
import classes from './pagination.module.scss';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const rangeSize = 4;
  const pageRange: number[] = [];

  let rangeStart = Math.max(1, currentPage - Math.floor(rangeSize / 2));
  const rangeEnd = Math.min(rangeStart + rangeSize - 1, totalPages);

  rangeStart = Math.max(1, rangeEnd - rangeSize + 1);

  for (let i = rangeStart; i <= rangeEnd; i += 1) {
    pageRange.push(i);
  }

  return (
    <div className={classes.outerContainer}>
      <MoveButton
        isDisabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        iconClassName={classes.arrowDirection}
      />

      <div className={classes.innerContainer}>
        {pageRange.map((page) => (
          <IconButton
            key={page}
            // className={currentPage === page ? 'active' : ''}
            isFilled={currentPage === page}
            onClick={() => onPageChange(page)}
          >
            {page}
          </IconButton>
        ))}
      </div>

      <MoveButton
        isDisabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </div>
  );
};

export default Pagination;
