/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';
import { useLockedBody } from 'usehooks-ts';
import cn from 'classnames';
import Button from '../shared/buttons/Button/Button';
import classes from './Modal.module.scss';
import ShoppingBag from '../../icons/ShoppingBag/ShoppingBag';

type Props = {
  title: string;
  description: string;
  onClose: () => void;
  showModal: boolean;
  promo?: string;
  navigation?: string;
};

const Modal: React.FC<Props> = ({
  title,
  onClose,
  showModal,
  description,
  promo,
  navigation,
}) => {
  const navigate = useNavigate();

  const handleCloseModal = (e: KeyboardEvent) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
      navigate(String(navigation));
    }
  };

  const closeModal = () => {
    onClose();
    navigate(String(navigation));
  };

  const [, setLocked] = useLockedBody(false, 'root');

  useEffect(() => {
    setLocked(showModal);
  }, [showModal]);

  useEffect(() => {
    document.body.addEventListener('keydown', handleCloseModal);

    return function cleanup() {
      document.body.removeEventListener('keydown', handleCloseModal);
    };
  }, []);

  const {
    icon,
    modal,
    modal__content: modalContent,
    modal__header: modalHeader,
    modal__title: modalTitle,
    modal__body: modalBody,
    modal__footer: modalFooter,
    'modal--active': active,
  } = classes;

  return (
    <CSSTransition
      in={showModal}
      unmountOnExit
      onEnter={() => !showModal}
      onExited={() => showModal}
      timeout={{ enter: 0, exit: 0 }}
    >
      <div className={cn(modal, { [active]: showModal })} onClick={onClose}>
        <div className={modalContent} onClick={(e) => e.stopPropagation()}>
          <div>
            <ShoppingBag className={icon} />
          </div>
          <div className={modalHeader}>
            <h4 className={modalTitle}>
              {title}
            </h4>
          </div>
          <div className={modalBody}>
            {description}
            <strong>{promo}</strong>
          </div>
          <div className={modalFooter}>
            <Button
              onClick={closeModal}
              label="Close"
              height="48px"
            />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Modal;
