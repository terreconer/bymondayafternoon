import { ChangeEvent } from "react";
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
  /**
   * There is no text validation yet so type anything that could be full name
   */
  const handleInputValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;
    onDataChange(value, name);
  };

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
