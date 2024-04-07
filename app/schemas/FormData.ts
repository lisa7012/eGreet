import { z } from 'zod';

export const FormDataSchema = z.object({
  senderName: z.string().min(1, { message: 'Please enter a name' }),
  recipientName: z.string().min(1, { message: 'Please enter a name' }),
  recipientEmail: z.string().email({ message: 'Please enter a valid email' }),
});

export type FormInputs = z.infer<typeof FormDataSchema>;
