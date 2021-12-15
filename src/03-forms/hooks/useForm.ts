import { ChangeEvent, useState } from 'react';

export const useForm = <T extends object>(initialForm: T) => {
  const [formData, setFormData] = useState(initialForm);

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevForm) => ({
      ...prevForm,
      [ev.target.name]: ev.target.value,
    }));
  };

  return { ...formData, formData, onChange };
};
