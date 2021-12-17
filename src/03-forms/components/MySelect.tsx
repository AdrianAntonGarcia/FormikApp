import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  //   ya es opcional por definicion
  [x: string]: any;
}
export const MySelect = ({ label, ...props }: Props) => {
  // este usefield usa el context que expone el componente padre Formik
  const [field] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  );
};
