import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useLocation } from 'react-router-dom';
import Search from '../../icons/Search';
import Close from '../../icons/Close';
import classes from './SearchField.module.scss';

const {
  'search-form': searchForm,
  'search-form__input': searchFormInput,
  'search-form__button': searchFormButton,
} = classes;

export const SearchField: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showClearButton, setShowClearButton] = useState(false);

  const location = useLocation();
  const isSearchVisible = location.pathname === '/phones'
    || location.pathname === '/favourites';

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputValue(value);
    setShowClearButton(value.length > 0);
  };

  const handleClear = () => {
    setInputValue('');
    setShowClearButton(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform search or other form submission actions here
  };

  return (
    <>
      {isSearchVisible && (
        <form className={`${searchForm} ${isFocused ? 'focused' : ''}`} onSubmit={handleSubmit}>
          <input
            type="text"
            className={searchFormInput}
            value={inputValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="Type something..."
          />
          {showClearButton ? (
            <button
              type="button"
              className={searchFormButton}
              onClick={handleClear}
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
