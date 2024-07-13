/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// Product------------------------------------
const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductServices.createProduct(productData);

  res.json({
    success: true,
    message: "Product is created successfully !",
    data: result,
  });
};
//------------------------------------------------
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProducts();

    res.status(200).json({
      success: true,
      message: "Products are fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch Products!",
      error: err,
    });
  }
};
//-----------------------------------------------------
const getProductById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await ProductServices.getProductById(id);

    res.status(200).json({
      success: true,
      message: "Products are fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch Product!",
      error: err,
    });
  }
};
//-----------------------------------------------------
const getProductBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const result = await ProductServices.getProductBySlug(slug);

    res.status(200).json({
      success: true,
      message: "Products are fetched successfully !",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not fetch Product!",
      error: err,
    });
  }
};
// ---------------------------------
const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const productData = req.body;
  try {
    const result = await ProductServices.updateProduct(id, productData);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not update product!",
      error: err.message,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await ProductServices.deleteProduct(id);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not delete product!",
      error: err.message,
    });
  }
};

//****************************************************** */
export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  getProductBySlug,
  updateProduct,
  deleteProduct,
};
