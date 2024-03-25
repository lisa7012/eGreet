import { z } from 'zod';

export const FormSchema = z.object({
  name: z.string().min(2),
  recipientName: z.string().min(2),
  email: z.string().email(),
  recipientEmail: z.string().email(),
  message: z.string().min(1),
});
