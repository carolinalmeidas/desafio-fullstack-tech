import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledInput } from './styled';

interface IInputProps{
  id: string
  label: string;
  type: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const Input = ({ id ,label, type, error, register}: IInputProps) => {
  return(
    <StyledInput>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} {...register}/>
    {error ? <p>{error.message}</p> : null}
  </StyledInput>
  )
};