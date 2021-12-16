import { useFormik } from 'formik';
import '../styles/styles.css';

export const FormikBasicPage = () => {
  const {
    handleChange,
    handleSubmit,
    values: { firstName, lastName, email },
  } = useFormik({
    initialValues: {
      firstName: 'Adrián',
      lastName: 'Antón',
      email: 'adrtler@gmail.com',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h1>Formik basic tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={firstName}
        />
        <span>First name is required</span>
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={lastName}
        />
        <span>Last name is required</span>
        <label htmlFor="lastName">Email Address</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
        <span>Email is required</span>
        <span>Check for a valid email format</span>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
