"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productValidation = exports.validateProducts = void 0;
const zod_1 = require("zod");
exports.validateProducts = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1).max(255).optional(),
        image: zod_1.z.string().url().optional(),
        price: zod_1.z
            .string()
            .regex(/^\d+(\.\d{1,2})?$/)
            .optional(),
        description: zod_1.z.string().min(1).optional(),
        category: zod_1.z.string().min(1).optional(),
        topSelling: zod_1.z.boolean().optional(),
        brand: zod_1.z.string().min(1).optional(),
        quantity: zod_1.z.string().regex(/^\d+$/).optional(),
        slug: zod_1.z.string().min(1).optional(),
        isDeleted: zod_1.z.boolean().optional(),
    }),
});
exports.productValidation = {
    validateProducts: exports.validateProducts,
};
