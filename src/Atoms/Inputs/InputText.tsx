import { ChangeEvent, useState, useEffect } from "react";
import classNames from 'classnames';

interface IInputText {
  name: string;
  placeholder: string;
  disabled: boolean;
  required?: boolean;
  value: string | null;
  onDataChange(value: string | boolean | null, name?: string): void;
}

export const InputText = ({ placeholder, name, disabled, required, value, onDataChange }: IInputText) => {
  // const [inputValue, setInputValue] = useState(value);

  const handleInputValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    // setInputValue(value);
    onDataChange(value, name);
  };

  // useEffect(() => {
  //   console.log(value, 'VALUE')
  // }, [value]);

  return (
    <input
      className={classNames('default', 'input')}
      type="text"
      name={name}
      value={value || ''}
      disabled={disabled}
      placeholder={placeholder}
      required={required}
      onChange={handleInputValue}
    />
  );
};
