import { ChangeEvent, useState } from 'react';

export const useForm = <T extends object>(initialForm: T) => {
  const [formData, setFormData] = useState(initialForm);

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevForm) => ({
      ...prevForm,
      [ev.target.name]: ev.target.value,
    }));
  };

  const resetForm = () => {
    setFormData({ ...initialForm });
  };

  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return { ...formData, formData, onChange, resetForm, isValidEmail };
};
