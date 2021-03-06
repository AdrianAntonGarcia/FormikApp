import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {
  const {
    formData,
    onChange,
    email,
    name,
    password1,
    password2,
    resetForm,
    isValidEmail,
  } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`}
        />
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        {!isValidEmail(email) && <span>Email no válido</span>}

        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        {password1.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña tiene que tener 6 carácteres</span>
        )}
        <input
          type="password"
          name="password2"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
        />
        {password2.trim().length <= 0 && <span>Este campo es necesario</span>}
        {password2.trim().length > 0 &&
          password2.trim().length !== password1.trim().length && (
            <span>Las contraseñas deben coincidir</span>
          )}

        <button type="submit">Create</button>
        <button type="button" onClick={resetForm}>
          Reset Form
        </button>

        <pre>{JSON.stringify(formData)}</pre>
      </form>
    </div>
  );
};
