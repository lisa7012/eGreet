import { z } from 'zod';

export const FormDataSchema = z.object({
  name: z.string().min(1, { message: 'Please enter a name' }),
  recipientName: z.string().min(1, { message: 'Please enter a name' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  recipientEmail: z.string().email({ message: 'Please enter a valid email' }),
});

export type Inputs = z.infer<typeof FormDataSchema>;
