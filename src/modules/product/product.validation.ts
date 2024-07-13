import { z } from "zod";

export const validateProducts = z.object({
  body: z.object({
    name: z.string().min(1).max(255).optional(),
    image: z.string().url().optional(),
    price: z
      .string()
      .regex(/^\d+(\.\d{1,2})?$/)
      .optional(),
    description: z.string().min(1).optional(),
    category: z.string().min(1).optional(),
    topSelling: z.boolean().optional(),
    brand: z.string().min(1).optional(),
    quantity: z.string().regex(/^\d+$/).optional(),
    slug: z.string().min(1).optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const productValidation = {
  validateProducts,
};
