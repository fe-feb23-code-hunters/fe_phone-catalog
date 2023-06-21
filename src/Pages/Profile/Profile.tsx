import cn from 'classnames';
import { useContext, useEffect, useState } from 'react';
import BackButton from '../../components/shared/buttons/BackButton';
import Button from '../../components/shared/buttons/Button';
import classes from './Profile.module.scss';
import { Order } from '../../components/Order';
import { EmptyPage } from '../../components/EmptyPage';
import Orders from '../../icons/Orders/Orders';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
import { fetchUserOrders } from '../../api/orders.api';
import { Order as OrderType } from '../../types/order';
import { ErrorItem } from '../../components/ErrorItem';

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

export const Profile = () => {
  const { userId, logOut } = useContext(AuthContext);
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        if (userId === null) {
          return;
        }

        const userOrders = await fetchUserOrders(userId);

        setOrders(userOrders);
      } catch {
        setHasError(true);
      }
    };

    loadOrders();
  }, [userId]);

  const hasNoOrders = orders.length === 0 && !hasError;

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
                onClick={logOut}
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
          {orders.length > 0 && (
            orders.map((orderItem) => (
              <Order
                key={orderItem.id}
                order={orderItem}
              />
            ))
          )}

          {hasError && (
            <ErrorItem />
          )}

          {hasNoOrders && (
            <EmptyPage
              pageTitle="No orders yet!"
              // eslint-disable-next-line max-len
              pageText="Explore our products! Need help? Contact support. Happy shopping!"
            >
              <Orders />
            </EmptyPage>
          )}
        </div>
      </div>
    </div>
  );
};
