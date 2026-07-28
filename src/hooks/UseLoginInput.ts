import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema, type LoginFormData } from "../schemas/AuthSchema";

const UseLoginInput =() => {
  return useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: 'onChange',
  })
}

export default UseLoginInput;