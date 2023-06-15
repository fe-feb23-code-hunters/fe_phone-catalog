import { FC, useState } from 'react';
import cn from 'classnames';
import classes from './PhotoSelect.module.scss';
import { Phone } from '../../types/phone';

interface Props {
  phone: Phone,
}

const PhotoSelect: FC<Props> = ({ phone }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  const {
    preview,
    photo,
    preview__selected: isSelected,
    photo__container: photoContainer,
    preview__container: previewContainer,
    main_photo__container: selectedPhotoContainer,
  } = classes;

  const onSelectPhoto = (newPhoto: string) => {
    setSelectedPhoto(newPhoto);
  };

  return (
    <div className={photoContainer}>
      <div className={previewContainer}>
        {phone.images.map((image) => {
          return (
            <button
              className={cn(
                preview,
                { [isSelected]: image === selectedPhoto },
              )}
              type="button"
              onClick={() => onSelectPhoto(image)}
            >
              <img
                className={photo}
                src={`${process.env.REACT_APP_API_PATH}/${image}`}
                alt={phone.name}
              />
            </button>
          );
        })}
      </div>

      <div className={selectedPhotoContainer}>
        <img
          className={photo}
          src={`${process.env.REACT_APP_API_PATH}/${selectedPhoto}`}
          alt={phone.name}
        />
      </div>

    </div>
  );
};

export default PhotoSelect;
