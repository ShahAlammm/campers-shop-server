"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const slugify_1 = __importDefault(require("slugify"));
const productSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },
    price: {
        type: String,
        required: [true, "Price is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    quantity: {
        type: String,
        required: [true, "Quantity is required"],
    },
    category: {
        type: String,
        required: [true, "Quantity is required"],
    },
    brand: {
        type: String,
        required: [true, "Brand is required"],
    },
    slug: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    topSelling: {
        type: Boolean,
        default: false,
    },
    image: {
        type: String,
        required: [true, "image is required"],
    },
}, {
    timestamps: true,
});
productSchema.method("createSlug", function createSlug(payload) {
    const slug = (0, slugify_1.default)(`${payload.name}}`, {
        lower: true,
    });
    return slug;
});
exports.Product = (0, mongoose_1.model)("Product", productSchema);
