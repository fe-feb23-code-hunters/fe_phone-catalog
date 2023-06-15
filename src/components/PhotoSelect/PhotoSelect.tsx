import { FC } from 'react';
import cn from 'classnames';
import classes from './PhotoSelect.module.scss';

interface Props {
  name: string;
  values: string[] | undefined;
  selectedPhoto: string | null;
  onSelectPhoto: (newPhoto: string) => void;
}

const PhotoSelect: FC<Props> = ({
  name,
  values,
  selectedPhoto,
  onSelectPhoto,
}) => {
  const {
    preview,
    photo,
    preview__selected: isSelected,
    photo__container: photoContainer,
    preview__container: previewContainer,
    main_photo__container: selectedPhotoContainer,
  } = classes;

  return (
    <div className={photoContainer}>
      <div className={previewContainer}>
        {values && values.map((value) => {
          return (
            <button
              className={cn(
                preview,
                { [isSelected]: value === selectedPhoto },
              )}
              type="button"
              onClick={() => onSelectPhoto(value)}
            >
              <img
                className={photo}
                src={`${process.env.REACT_APP_API_PATH}/${value}`}
                alt={name}
              />
            </button>
          );
        })}
      </div>

      <div className={selectedPhotoContainer}>
        <img
          className={photo}
          src={`${process.env.REACT_APP_API_PATH}/${selectedPhoto}`}
          alt={name}
        />
      </div>

    </div>
  );
};

export default PhotoSelect;
