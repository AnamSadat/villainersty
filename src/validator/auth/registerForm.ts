import z from 'zod';

export const schemaRegister = z.object({
  username: z.string().min(1),
  email: z.email(),
  password: z
    .string()
    .min(8, { message: 'Password minimal 8 karakter' })
    .refine((val) => /[A-Z]/.test(val), {
      message: 'Password harus mengandung huruf besar (A-Z)',
    })
    .refine((val) => /[a-z]/.test(val), {
      message: 'Password harus mengandung huruf kecil (a-z)',
    })
    .refine((val) => /[0-9]/.test(val), {
      message: 'Password harus mengandung angka (0-9)',
    })
    .refine((val) => /[^A-Za-z0-9]/.test(val), {
      message: 'Password harus mengandung simbol (!@#$%, dll)',
    }),
});

export type formSchemaRegister = z.infer<typeof schemaRegister>;
