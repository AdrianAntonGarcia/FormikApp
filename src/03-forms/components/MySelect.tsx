import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  //   ya es opcional por definicion
  [x: string]: any;
}
export const MySelect = ({ label, ...props }: Props) => {
  // este usefield usa el context que expone el componente padre Formik
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};
