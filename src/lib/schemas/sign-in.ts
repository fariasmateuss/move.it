import { z } from 'zod';

import { PASSWORD_MIN_LENGTH } from 'constants/authentication';

export const signInSchema = z.object({
  email: z.string(),
  password: z.string().min(PASSWORD_MIN_LENGTH),
});
