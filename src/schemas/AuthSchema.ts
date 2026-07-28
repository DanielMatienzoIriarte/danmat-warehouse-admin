import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.email({ error: 'Invalid email address' }),
  password: z.string()
    .min(8, 'Password must be at least 6 characters long')
    .max(20, 'Must not exceed 20 characters')
    .regex(/[A-Z]/, 'Must contain at least one capital letter')
    .regex(/[0-9]/, 'Must contain at least one number')
    .regex(/[-.]/, 'Must contain at least one special character (- or .)')
})

export type LoginFormData = z.infer<typeof LoginSchema>;