import { useState, useEffect } from 'react';

/**
 * For better usage could be transfered to separate types file and imported when necessary
 * to avoid duplication
 */
type FormField<T> = {
  value: T;
  required: boolean;
};

interface IFormProps {
  fullName: FormField<string | null>;
  email: FormField<string | null>;
  phone: FormField<string | null>;
  agreement: FormField<boolean>
};

export const useFormValidation = (formData: IFormProps) => {
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid = Object.values(formData).every(
      field => {
        return (
          field.required &&
          (
            field.value !== null &&
            field.value !== '' &&
            field.value !== false
          )
        )
      }
    );

    setIsFormValid(isValid);
  }, [formData]);

  return isFormValid;
};
