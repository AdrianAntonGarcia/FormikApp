import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';
import '../styles/styles.css';
import { MySelect } from '../components/MySelect';
import { MyCheckbox } from '../components/MyCheckbox';

export const FormikAbstractationPage = () => {
  return (
    <div>
      <h1>Formik Abstractation tutorial</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(10, 'Debe de tener 10 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('El formato del email no es correcto')
            .required('Requerido'),
          terms: Yup.boolean()
            .oneOf([true], 'Must accept the terms and conditions')
            .required('Requerido'),
          // Bloqueamos una opción con notOneOf
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'Esta opción no es permitida')
            .required('Required'),
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="First Name"
            />
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Last Name"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="Email"
              type="email"
            />

            <MySelect label={'Job Type'} name={'jobType'}>
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT senior</option>
              <option value="it-jr">IT junior</option>
            </MySelect>

            <MyCheckbox label={'Terms and conditions'} name={'terms'} />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
