import '../styles/styles.css';
import { Form, Formik } from 'formik';
import { MyTextInput } from '../components/MyTextInput';
import * as Yup from 'yup';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{ name: '', email: '', password1: '', password2: '' }}
        onSubmit={(values, formikHekpers) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .min(2, 'Min number of characters are 2')
            .max(15, 'Max number of characters are 15')
            .required('Please, fill the field '),
          email: Yup.string()
            .email('Email format incorrect')
            .required('Please, fill the field '),
          password1: Yup.string()
            .min(6, 'Min number of characters are 6')
            .max(30, 'Max number of characters are 30')
            .required('Please, fill the field '),
          password2: Yup.string()
            .min(6, 'Min number of characters are 6')
            .max(30, 'Max number of characters are 30')
            .oneOf([Yup.ref('password1')], 'Passwords must match')
            .required('Please, fill the field '),
        })}
      >
        {() => (
          <Form>
            <MyTextInput name="name" label="Name" placeholder="Name" />
            <MyTextInput
              name="email"
              label="Email"
              type="email"
              placeholder="Email"
            />
            <MyTextInput
              name="password1"
              label="Password"
              placeholder="Password"
              type="password"
            />
            <MyTextInput
              name="password2"
              label="Confirm your password"
              placeholder="Repeat the password"
              type="password"
            />
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
