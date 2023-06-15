import { useState } from 'react';
import Dropdown from '../../components/shared/Dropdown';
import { DropdownOption } from '../../types/common';
import CategorySection from './CategorySection/CategorySection';
import MainTitle from './MainTitle/MainTitle';
import BrandNewProducts from './BrandNewProducts';

const DUMMY_OPTIONS = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

const HomePage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<DropdownOption>(
    DUMMY_OPTIONS[0],
  );

  const onDropdownChange = (newOption: DropdownOption) => {
    setSelectedOption(newOption);
  };

  return (
    <div>
      <MainTitle />

      {/* Products for review, delete this */}
      <BrandNewProducts />

      <Dropdown
        options={DUMMY_OPTIONS}
        selectedOption={selectedOption}
        onChange={onDropdownChange}
        label="Description"
      />
      <CategorySection />
    </div>
  );
};

export default HomePage;
