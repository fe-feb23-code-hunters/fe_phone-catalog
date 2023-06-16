import React from 'react';
import cn from 'classnames';
import classes from './Category.module.scss';

type Props = {
  imgUrl: string;
  altImg: string;
  subtitle: string;
  text: string;
  color?: string;
};

const Category: React.FC<Props> = ({
  imgUrl,
  altImg,
  subtitle,
  text,
  color,
}) => {
  const {
    rectagle,
    img,
    category__subtitle: subTitle,
    'category__body-text': bodyText,
  } = classes;

  return (
    <div>
      <div style={{ backgroundColor: color }} className={cn(rectagle)}>
        <img
          src={`${process.env.REACT_APP_API_PATH}${imgUrl}`}
          alt={altImg}
          className={img}
        />
      </div>
      <h4 className={subTitle}>{subtitle}</h4>
      <p className={bodyText}>{text}</p>
    </div>
  );
};

export default Category;
