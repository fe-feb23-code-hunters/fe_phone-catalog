import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import { Phone } from '../../types/phone';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './PhotoSelect.scss';

interface Props {
  phone: Phone;
}

SwiperCore.use([Pagination]);

const PhotoSelect: FC<Props> = ({ phone }) => (
  <div className="slider">
    <div className="slider-container">
      <Swiper
        direction="horizontal"
        id="swiper-photo"
        slidesPerView={1}
        spaceBetween={30}
        loop
        key={phone.id}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const image = phone.images[index];

            return `
              <div class="${className}">
                <img class="image-swipe-img" src=${`${process.env.REACT_APP_API_PATH}/${image}`} alt=${image} />
              </div>
            `;
          },
        }}
        modules={[Pagination]}
        className="swiper-photo"
      >
        {phone.images.map((image) => {
          return (
            <SwiperSlide key={image}>
              <div className="image-swipe">
                <img
                  src={`${process.env.REACT_APP_API_PATH}/${image}`}
                  alt={phone.name}
                  className="image-swipe-img"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  </div>
);

export default PhotoSelect;
