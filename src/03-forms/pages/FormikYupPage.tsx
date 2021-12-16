import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikYupPage = () => {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    touched,
    errors: {
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
    },
    values: { firstName, lastName, email },
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values: FormValues) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Debe de tener 15 caracteres o menos')
        .required('Requerido'),
      lastName: Yup.string()
        .max(10, 'Debe de tener 10 caracteres o menos')
        .required('Requerido'),
      email: Yup.string()
        .email('El formato del email no es correcto')
        .required('Requerido'),
    }),
  });
  return (
    <div>
      <h1>Formik Yup tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={firstName}
        />
        {touched.firstName && firstNameError && <span>{firstNameError}</span>}

        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={lastName}
        />
        {touched.lastName && lastNameError && <span>{lastNameError}</span>}
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={email}
        />
        {touched.email && emailError && <span>{emailError}</span>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
