import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  //   ya es opcional por definicion
  [x: string]: any;
}
export const MyCheckbox = ({ label, ...props }: Props) => {
  // este usefield usa el context que expone el componente padre Formik
  const [field] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
