import { useState } from "react";
import { InputText, InputEmail, InputNumber, LabelInput, InputCheckbox, Loader } from "../../../Atoms";
import { Button } from "../../../Atoms/Buttons";
import { useFormValidation, setUserData } from "../../../helpers";
import { useNavigate } from "react-router-dom";

import './styles/LoginForm.css';

type FormField<T> = {
  value: T;
  required: boolean;
};

interface IFormProps {
  fullName: FormField<string | null>;
  email: FormField<string | null>;
  phone: FormField<string | null>;
  agreement: FormField<boolean>;
};

const initState = {
  fullName: {
    value: null,
    required: true,
  },
  email: {
    value: null,
    required: true,
  },
  phone: {
    value: null,
    required: true,
  },
  agreement: {
    value: false,
    required: true,
  },
};

export const LoginForm = () => {
  const [formData, setFormData] = useState<IFormProps>(initState);
  const [isLoading, setIsLoading] = useState(false);
  const isFormValid = useFormValidation(formData);
  let navigateTo = useNavigate();

  const handleInputChange = (value: string | boolean | null, name: string, ) => {
    setFormData(prev => ({
      ...prev,
      [name as keyof IFormProps]: {
        ...prev[name as keyof IFormProps],
        value: value,
      },
    }));
  };

  const handleLoader = (data: boolean) => {
    setIsLoading(false);
    setFormData(initState);

    navigateTo('/todo');
  };

  const handleFormSubmit = () => {
    if (!isFormValid) return;

    setIsLoading(isFormValid);
    setUserData(formData, 'userData', handleLoader);
  };

  const { email, fullName, phone } = formData;

  if (isLoading) {
    //this crutch is just to emulate loader behavoir
    return (
      <div className="login-form-wrapper">
        <div className="login-form">
          <Loader />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="login-form-wrapper">
        <h2 className="login-form-heading">
          <span className="login-form-heading__title">Login Form</span>
        </h2>
        <div className="login-form__item">
          <LabelInput label="userFullName" title="Full Name" />
          <InputText
            name="fullName"
            placeholder="Type your full name"
            onDataChange={handleInputChange}
            disabled={false}
            required={true}
            value={fullName.value}
          />
        </div>
        <div className="login-form__item">
          <LabelInput label="userEmail" title="Email" />
          <InputEmail
            name="email"
            placeholder="Type your Email"
            onDataChange={handleInputChange}
            disabled={false}
            required={true}
            value={email.value}
          />
        </div>
        <div className="login-form__item">
          <LabelInput label="userPhoneNumber" title="Phone" />
          <InputNumber
            name="phone"
            placeholder="Type your phone number"
            onDataChange={handleInputChange}
            disabled={false}
            required={true}
            value={phone.value}
          />
        </div>
        <div className="login-form__item">
          <InputCheckbox
            name="agreement"
            onDataChange={handleInputChange}
            description="Description you agree on"
          />
        </div>
        <div>
          <Button
            type="submit"
            title="Login"
            disabled={!isFormValid}
            onClickHandler={handleFormSubmit}
          />
        </div>
      </div>
    </>
  );
};
