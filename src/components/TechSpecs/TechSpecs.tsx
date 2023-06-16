import { Product } from '../../types/product';
import classes from './TechSpecs.module.scss';

const {
  container,
  'tech-specs__title': techSpecsTitle,
  'tech-specs__list': techSpecsList,
  'tech-specs__item': techSpecsItem,
  'tech-specs__item-title': techSpecsItemTitle,
  'tech-specs__item-info': techSpecsItemInfo,
} = classes;

interface Props {
  product: Product;
}

export const TechSpecs: React.FC<Props> = ({ product }) => {
  const {
    phone,
    screen,
    ram,
  } = product;

  return (
    <div className={container}>
      {product && (
        <div>
          <h2 className={techSpecsTitle}>Tech specs</h2>
          <ul className={techSpecsList}>
            <li className={techSpecsItem}>
              <span className={techSpecsItemTitle}>Screen</span>
              <span className={techSpecsItemInfo}>{screen}</span>
            </li>
            <li className={techSpecsItem}>
              <span className={techSpecsItemTitle}>Resolution</span>
              <span className={techSpecsItemInfo}>{phone?.resolution}</span>
            </li>
            <li className={techSpecsItem}>
              <span className={techSpecsItemTitle}>Processor</span>
              <span className={techSpecsItemInfo}>{phone?.processor}</span>
            </li>
            <li className={techSpecsItem}>
              <span className={techSpecsItemTitle}>RAM</span>
              <span className={techSpecsItemInfo}>{ram}</span>
            </li>
            <li className={techSpecsItem}>
              <span className={techSpecsItemTitle}>Built in memory</span>
              <span className={techSpecsItemInfo}>
                {String(product?.capacity)}
              </span>
            </li>
            <li className={techSpecsItem}>
              <span className={techSpecsItemTitle}>Camera</span>
              <span className={techSpecsItemInfo}>{phone?.camera}</span>
            </li>
            <li className={techSpecsItem}>
              <span className={techSpecsItemTitle}>Zoom</span>
              <span className={techSpecsItemInfo}>{phone?.zoom}</span>
            </li>
            <li className={techSpecsItem}>
              <span className={techSpecsItemTitle}>Cell</span>
              <span>
                {phone?.cell.map(item => (
                  <span
                    className={techSpecsItemInfo}
                    key={item}
                  >
                    {`${item} `}
                  </span>
                ))}

              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
