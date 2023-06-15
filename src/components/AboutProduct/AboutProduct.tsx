import { Phone } from '../../types/phone';
import classes from './AboutProduct.module.scss';

const {
  container,
  'product-about': productAbout,
  'product-about__title': productAboutTitle,
  'product-about__section': productAboutSection,
  'product-about__section-title': productAboutSectionTitle,
  'product-about__paragraph': productAboutParagraph,
} = classes;

interface Props {
  phone: Phone | null;
}

export const AboutProduct: React.FC<Props> = ({ phone }) => {
  return (
    <div className={container}>
      {phone && (
        <div className={productAbout}>
          <h2 className={productAboutTitle}>About</h2>
          {phone.description.map(({ title, text }) => (
            <section
              key={title}
              className={productAboutSection}
            >
              <h3 className={productAboutSectionTitle}>
                {title}
              </h3>

              {text.map((paragraph) => (
                <p
                  key={paragraph}
                  className={productAboutParagraph}
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
      )}
    </div>
  );
};
