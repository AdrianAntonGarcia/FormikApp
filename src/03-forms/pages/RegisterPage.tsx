import { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/styles.css';

export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });

  const { email, name, password1, password2 } = registerData;

  const onChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setRegisterData((prevForm) => ({
      ...prevForm,
      [ev.target.name]: ev.target.value,
    }));
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
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
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        />
        <input
          type="password"
          name="password2"
          placeholder="Repeat password"
          value={password2}
          onChange={onChange}
        />
        <button type="submit">Create</button>
        <pre>{JSON.stringify(registerData)}</pre>
      </form>
    </div>
  );
};
