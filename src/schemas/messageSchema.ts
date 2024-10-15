import { z } from 'zod'

export const messageSchema = z.object({
    content: z
        .string()
        .min(7, { message: 'Content must be at least 7 characters.' })
        .max(300, { message: 'Content must not be longer than 300 characters.' }),
});