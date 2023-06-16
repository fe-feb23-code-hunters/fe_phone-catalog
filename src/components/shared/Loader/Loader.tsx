import cn from 'classnames';
import { Oval } from 'react-loader-spinner';
import classes from './loader.module.scss';

interface Props {
  className?: string;
}

const Loader: React.FC<Props> = ({ className }) => (
  <div className={cn(classes.container, className)}>
    <Oval
      ariaLabel="loading-indicator"
      height={50}
      width={50}
      strokeWidth={6}
      strokeWidthSecondary={2}
      color="#B4BDC3"
      secondaryColor="#E2E6E9"
    />
  </div>
);

export default Loader;
