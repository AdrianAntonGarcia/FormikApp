import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  //   ya es opcional por definicion
  [x: string]: any;
}
export const MyTextInput = ({ label, ...props }: Props) => {
  // este usefield usa el context que expone el componente padre Formik
  const [field, meta] = useField(props);
  //   console.log(field);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="text" className="text-input" {...field} {...props} />
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};
