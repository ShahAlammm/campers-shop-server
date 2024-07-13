import { Schema, model } from "mongoose";
import slugify from "slugify";
import { TProduct, TProductMethods, TProductModel } from "./product.interface";

const productSchema = new Schema<TProduct, TProductModel, TProductMethods>(
  {
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
  },
  {
    timestamps: true,
  }
);

productSchema.method("createSlug", function createSlug(payload: TProduct) {
  const slug = slugify(`${payload.name}}`, {
    lower: true,
  });

  return slug;
});

export const Product = model<TProduct, TProductModel>("Product", productSchema);
