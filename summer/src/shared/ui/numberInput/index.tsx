import React, { memo, useRef, useState } from 'react';
import './index.scss';

type NumberInputProps = React.ComponentPropsWithoutRef<'input'>;

export const NumberInput = memo((props: NumberInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [className, setClassName] = useState('');

  const onFocusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setClassName('focus');
    if (props.onFocus) {
      props.onFocus(e);
    }
  }

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    setClassName('');
    if (props.onBlur) {
      props.onBlur(e);
    }
  }

  const onTopClickHandler = () => {
    const current = inputRef.current;
    if (current) {
      current.stepUp();
    }
  }

  const onBottomClickHandler = () => {
    const current = inputRef.current;
    if (current) {
      current.stepDown();
    }
  }

  return (
    <div className={`number-input ${className}`}>
      <input {...props}
        className="number-input__input"
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        type="number"
        ref={inputRef}
      />
      <div className="number-input__controls">
        <div className="number-input__top" onClick={onTopClickHandler}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.50006 4.5L5.39054 1.83469C5.16584 1.6421 4.83428 1.6421 4.60959 1.83469L1.50006 4.5" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="number-input__bottom" onClick={onBottomClickHandler}>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.49994 1.5L4.60946 4.16531C4.83416 4.3579 5.16572 4.3579 5.39041 4.16531L8.49994 1.5" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  )
});
