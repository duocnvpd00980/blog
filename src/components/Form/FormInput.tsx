import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface Props {
  label: string
  name: string
  register: UseFormRegister<any>
  errors: FieldErrors<any>
}

const FormInput = ({ name, label, register, errors }: Props) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input
      {...register(name, { required: true })}
      className={`form-control ${errors[name] ? 'is-invalid' : ''}`}
    />
    {errors[name]?.type === 'required' && (
      <small className="form-text text-danger">{name} is required</small>
    )}
  </div>
)
export default FormInput
