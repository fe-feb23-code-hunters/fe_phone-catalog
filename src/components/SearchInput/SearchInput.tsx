import Search from '../../icons/Search/Search';
import classes from './SearchInput.module.scss';

const {
  search,
  container,
  search__box: searchBox,
  search__button: searchButton,
} = classes;

export const SearchInput = () => {
  return (
    <div className={container}>
      <div className={search}>
        <input
          type="text"
          id="box"
          placeholder="Type something..."
          className={searchBox}
        />
        <button className={searchButton} type="submit">
          <Search />
        </button>
      </div>
    </div>
  );
};
