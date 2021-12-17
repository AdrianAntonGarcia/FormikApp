import { useField } from 'formik';

interface Props {
  label: string;
  name: string;
  //   ya es opcional por definicion
  [x: string]: any;
}
export const MyCheckbox = ({ label, ...props }: Props) => {
  // este usefield usa el context que expone el componente padre Formik
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {label}
      </label>
      {meta.touched && meta.error && (
        <span className="error">{meta.error}</span>
      )}
    </>
  );
};
