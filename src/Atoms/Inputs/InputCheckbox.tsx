import { useState } from "react";

type InputCheckboxProps = {
  description?: string;
  name: string;
  onDataChange(value: string | boolean | null, name: string): void;
}

export const InputCheckbox = ({ description, name, onDataChange }: InputCheckboxProps) => {
  const [isChecked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!isChecked);
    onDataChange(!isChecked, name);
  };

  return (
    <>
      <div>
        <input
          name={name}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
        />
        <span>
          {description}
        </span>
      </div>
    </>
  );
};
