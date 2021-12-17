import formJson from '../data/custom-form.json';
import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={{ name: 'Adri' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            {formJson.map(({ type, name, placeholder, label }) => {
              return (
                <MyTextInput
                  key={name}
                  name={name}
                  label={label}
                  type={type as any}
                  placeholder={placeholder}
                />
              );
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
