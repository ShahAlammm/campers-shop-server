/* eslint-disable no-unused-vars */
import { Model } from "mongoose";


export type TProduct = {
  name: string;
  image: string;
  price: string;
  description: string;
  category: string;
  topSelling: boolean;
  brand: string;
  quantity: string;
  slug: string;
  isDeleted?: boolean;
};

// Put all user instance methods in this interface:

export type TProductMethods = {
  createSlug(payload: TProduct): string;
};


export type TProductModel = Model<
  TProduct,
  Record<string, unknown>,
  TProductMethods
>;
