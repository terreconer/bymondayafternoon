import { ChangeEvent, useState } from 'react';
import { validateEmail } from '../../helpers';
import classNames from 'classnames';
import './styles/InputStyles.css';

interface IInputEmail {
  placeholder: string;
  name: string;
  disabled: boolean;
  required: boolean;
  value: string | null;
  onDataChange(value: string | boolean | null, name: string): void;
}

export const InputEmail = ({ placeholder, name, disabled, required, value, onDataChange }: IInputEmail) => {
  const [isInputValid, setIsValid] = useState<boolean | null>(null);

  const inputClasses = classNames({
    'default': isInputValid === null,
    'valid': isInputValid,
    'error': isInputValid === false,
  })

  const handleEmailValueChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    const isValid = validateEmail(value);
  
    setIsValid(isValid);
    onDataChange(value, name);
  };

  return (
    <>
      <input
        className={inputClasses}
        type="email"
        name={name}
        value={value || ''}
        disabled={disabled}
        placeholder={placeholder}
        onInput={handleEmailValueChange}
        required={required}
      />
    </>
  );
};