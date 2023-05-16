import { memo, useState } from 'react';
import { Select } from '@mantine/core';
import './index.scss';

type SelectProps = {
  label?: string;
  options: {
    value: string;
    label: string;
  }[];
  value: string | undefined;
  setValue: (val: string) => void;
  onChange?: CallableFunction;
}

export const SelectCustom = memo(({ label, options, value, setValue, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const onDropdownOpenHandler = () => {
    setIsOpen(true);
  }

  const onDropdownCloseHandler = () => {
    setIsOpen(false);
  }

  const onChangeHandler = (val: string) => {
    setValue(val);
    if (onChange) {
      onChange();
    }
  }

  return (
    <Select
      className={`select ${isOpen ? 'open' : ''}`}
      data={options}
      data-elem="industry-select"
      searchable
      value={value}
      onChange={onChangeHandler}
      onDropdownOpen={onDropdownOpenHandler}
      onDropdownClose={onDropdownCloseHandler}
      label={label}
      rightSection={
        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 0.999999L7.21905 6.33061C7.66844 6.7158 8.33156 6.7158 8.78095 6.33061L15 1" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      }
    />
  )
});
