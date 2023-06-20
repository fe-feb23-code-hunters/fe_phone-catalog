import cn from 'classnames';
import BackButton from '../../components/shared/buttons/BackButton';
import Button from '../../components/shared/buttons/Button';
import classes from './Profile.module.scss';
import { Order } from '../../components/Order';
import { EmptyPage } from '../../components/EmptyPage';
import Orders from '../../icons/Orders/Orders';

const {
  grid,
  container,
  title,
  'user-info': userInfo,
  grid__desktop: gridDesktop,
  grid__tablet: gridTablet,
  grid__mobile: gridMobile,
  grid__item: gridItem,
  grid__item__tablet_1_12: gridTabletFullSize,
  grid__item__mobile_1_4: gridMobileFullSize,
  grid__item__desktop_8_24: gridDesktopEnd,
  grid__item__desktop_1_7: gridDesktopStart,
  button__back: buttonBack,
  'user-info__heading': userInfoHeading,
  'user-info__email': userInfoEmail,
  'user-info__button': userInfoButton,
} = classes;

const goBack = () => {
  window.history.back();
};

// dummy handler, replace it with real one
const onClick = () => { };

export const Profile = () => {
  return (
    <div className={container}>
      <div className={buttonBack}>
        <BackButton onClick={goBack} />
      </div>

      <h1 className={title}>Profile</h1>

      <div className={cn(grid, gridMobile, gridTablet, gridDesktop)}>
        <div
          className={cn(
            gridItem,
            gridMobileFullSize,
            gridTabletFullSize,
            gridDesktopStart,
          )}
        >
          <div className={userInfo}>
            <h2 className={userInfoHeading}>Your email:</h2>

            <h3 className={userInfoEmail}>
              example@gmail.com
            </h3>

            <div className={userInfoButton}>
              <Button
                label="Log out"
                onClick={onClick}
                height="48px"
              />
            </div>
          </div>
        </div>

        <div
          className={cn(
            gridItem,
            gridMobileFullSize,
            gridTabletFullSize,
            gridDesktopEnd,
          )}
        >
          <Order />
          <EmptyPage
            pageTitle="No orders yet!"
            // eslint-disable-next-line max-len
            pageText="Explore our products! Need help? Contact support. Happy shopping!"
          >
            <Orders />
          </EmptyPage>
        </div>
      </div>
    </div>
  );
};
