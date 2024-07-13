import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// Products -===================

const createProduct = async (payload: TProduct) => {
  const result = new Product(payload);

  const slug = result.createSlug(payload);

  result.slug = slug;
  await result.save(); // database save

  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getProductById = async (id: string) => {
  const product = await Product.findById({ _id: id });
  return product;
};

const getProductBySlug = async (slug: string) => {
  const product = await Product.findOne({ slug: slug });
  return product;
};

const updateProduct = async (id: string, payload: Partial<TProduct>) => {
  const product = await Product.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return product;
};

const deleteProduct = async (id: string) => {
  const result = await Product.findByIdAndDelete({ _id: id });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getProductById,
  getProductBySlug,
  updateProduct,
  deleteProduct,
};
