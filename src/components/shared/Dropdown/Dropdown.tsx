/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Arrow from '../../../icons/Arrow';
import { DropdownOption } from '../../../types/common';
import classes from './dropdown.module.scss';

interface Props {
  options: DropdownOption[];
  selectedOption: DropdownOption;
  onChange: (newOption: DropdownOption) => void;
  label: string;
}

const Dropdown: React.FC<Props> = ({
  options,
  selectedOption,
  onChange,
  label,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleOptionClick = (option: DropdownOption) => {
    onChange(option);

    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isClickedOutside = !ref.current?.contains(event.target as Node);

      if (isClickedOutside) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className={classes.dropdown}>
      <span className={classes.dropdown__label}>{label}</span>

      <button
        type="button"
        className={classes.dropdown__button}
        onClick={handleToggle}
      >
        {selectedOption?.label}

        <Arrow
          className={cn({
            [classes.arrow]: !isOpen,
            [classes.arrow__up]: isOpen,
          })}
        />
      </button>

      <ul
        className={cn(classes.dropdown__list, {
          [classes['dropdown__list--open']]: isOpen,
        })}
      >
        {options.map((option) => (
          <li
            key={option.value}
            className={classes.dropdown__item}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
