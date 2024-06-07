import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface Props {
  label: string
  name: string
  register: UseFormRegister<any>
  errors: FieldErrors<any>
}

const FormInput = ({ name, label, register, errors }: Props) => {
  const errorMessage = errors[name]?.message
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        {...register(name)}
        className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
      />
      {errorMessage && (
        <small className="text-danger">{String(errorMessage)}</small>
      )}
    </div>
  )
}
export default FormInput
