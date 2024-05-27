import { ChangeEvent } from "react";

interface IInputNumber {
  placeholder: string;
  name: string;
  disabled: boolean;
  required: boolean;
  value: number | string | null;
  onDataChange(value: string | boolean | null, name: string): void;
}

export const InputNumber = ({ placeholder, name, disabled, value, required, onDataChange}: IInputNumber) => {
  /**
   * There is no number validation, so just type anything that is number
   */
  const handlePhoneNumber = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = target;

    onDataChange(value, name);
  };

  return (
    <>
      <input
        className='default input'
        type="number"
        name={name}
        value={value || ''}
        disabled={disabled}
        placeholder={placeholder}
        required={required}
        onChange={handlePhoneNumber}
      />
    </>
  );
};