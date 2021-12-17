import formJson from '../data/custom-form.json';
import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';

const initalValues: { [x: string]: any } = {};

for (const input of formJson) {
  initalValues[input.name] = input.value;
}

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initalValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form noValidate>
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
