import { z } from 'zod';

import { PASSWORD_MIN_LENGTH } from 'constants/authentication';

export const signUpSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string().min(PASSWORD_MIN_LENGTH),
});
