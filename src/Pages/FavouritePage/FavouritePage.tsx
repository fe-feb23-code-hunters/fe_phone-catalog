import { useContext } from 'react';
// eslint-disable-next-line max-len
import { FavouritesContext } from '../../providers/FavouritesProvider/FavouritesProvider';

const FavouritePage: React.FC = () => {
  const { favourites, deleteFromFavourites } = useContext(FavouritesContext);

  return (
    <div>
      <h1>Favourites</h1>

      {favourites.map((product) => (
        <div key={product.id}>
          {`
            id: ${product.id}
          `}

          <button
            type="button"
            onClick={() => deleteFromFavourites(product.id)}
          >
            Delete from favourites
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavouritePage;
