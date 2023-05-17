import { useRef, useState } from 'react';
import { ButtonSmall } from '..';
import './index.scss';

type SearchBarProps = {
  onSubmit?: (search?: string) => void;
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [className, setClassName] = useState('');
  const [value, setValue] = useState('');
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onFocusHandler = () => {
    setClassName('focus');
  }

  const onBlurHandler = () => {
    setClassName('');
  }
  
  const onSubmitHandler = () => {
    if (onSubmit) {
      onSubmit(value);
    }
  }

  const onSearchElemClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value !== '') {
      !isFilled && setIsFilled(true);
    } else {
      isFilled && setIsFilled(false);
    }
  }

  return (
    <div onClick={onSearchElemClick} className={`search ${className} ${isFilled ? 'filled' : ''}`}>
      <svg className='search__icon' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.468 10.468L13.5714 13.5714M12.0924 6.54622C12.0924 9.60931 9.60931 12.0924 6.54622 12.0924C3.48313 12.0924 1 9.60931 1 6.54622C1 3.48313 3.48313 1 6.54622 1C9.60931 1 12.0924 3.48313 12.0924 6.54622Z" stroke="#ACADB9" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
      <input
        ref={inputRef}
        value={value}
        type="text"
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
      />
      <ButtonSmall onClick={onSubmitHandler}>Поиск</ButtonSmall>
    </div>
  )
}
