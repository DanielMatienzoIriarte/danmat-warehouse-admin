import type { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface InputProps {
  type: string;
  placeholder: string;
  label?: string;
  error?: FieldError;
  register: UseFormRegisterReturn;
}

export const InputField = (
  { type, placeholder, label, register, error }: InputProps
) => (
  <>
    {label && <label className="text-sm font-medium">{label}</label>}

    <div className="input-group input-group-icon">
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`form-control input-lg ${error ? 'is-invalid' : ''}`}
      />
      <span className="input-group-addon">
        <span className="icon icon-lg">
          <i className="fa fa-user"></i>
        </span>
      </span>
    </div>

    {error && <p className="text-red-500 text-sm">{error.message}</p>}
  </>
);