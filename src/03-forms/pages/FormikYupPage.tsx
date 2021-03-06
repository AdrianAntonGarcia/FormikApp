import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikYupPage = () => {
  const {
    handleSubmit,
    getFieldProps,
    touched,
    errors: {
      firstName: firstNameError,
      lastName: lastNameError,
      email: emailError,
    },
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
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
        <input type="text" {...getFieldProps('firstName')} />
        {touched.firstName && firstNameError && <span>{firstNameError}</span>}

        <label htmlFor="lastName">Last name</label>
        <input type="text" {...getFieldProps('lastName')} />
        {touched.lastName && lastNameError && <span>{lastNameError}</span>}
        <label htmlFor="email">Email Address</label>
        <input type="email" {...getFieldProps('email')} />
        {touched.email && emailError && <span>{emailError}</span>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};
