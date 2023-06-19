import React, {
  useState,
  useEffect,
  ChangeEventHandler,
} from 'react';
import { useLocation } from 'react-router-dom';
import Search from '../../icons/Search';
import Close from '../../icons/Close';
import classes from './SearchField.module.scss';

const {
  'search-form': searchForm,
  'search-form__input': searchFormInput,
  'search-form__button': searchFormButton,
} = classes;

interface Props {
  query: string;
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  handleClear: () => void;
}

export const SearchField: React.FC<Props> = ({
  query,
  handleInputChange,
  handleClear,
}) => {
  const [showClearButton, setShowClearButton] = useState(false);

  const location = useLocation();
  const isSearchVisible = location.pathname === '/phones'
    || location.pathname === '/favourites';

  const handleClearInput = () => {
    handleClear();
    setShowClearButton(false);
  };

  useEffect(() => {
    setShowClearButton(query.length > 0);
  }, [query]);

  return (
    <>
      {isSearchVisible && (
        <form className={searchForm}>
          <input
            type="text"
            className={searchFormInput}
            value={query}
            onChange={handleInputChange}
            placeholder="Type something..."
          />
          {showClearButton ? (
            <button
              type="button"
              className={searchFormButton}
              onClick={handleClearInput}
            >
              <Close className="clear-icon" />
            </button>
          ) : (
            <button
              type="button"
              className={searchFormButton}
            >
              <Search className="search-icon" />
            </button>
          )}
        </form>
      )}
    </>
  );
};
