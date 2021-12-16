import { FormikErrors, useFormik } from 'formik';
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!firstName) {
      errors.firstName = 'Required';
    } else if (firstName.length > 15) {
      errors.firstName = 'Must be 15 characters or less';
    }
    if (!lastName) {
      errors.lastName = 'Required';
    } else if (lastName.length > 10) {
      errors.lastName = 'Must be 10 characters or less';
    }
    if (!email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  };

  const {
    handleChange,
    handleSubmit,
    errors,
    values: { firstName, lastName, email },
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate,
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
