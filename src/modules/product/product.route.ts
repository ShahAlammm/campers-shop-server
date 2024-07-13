import express from "express";
import { ProductControllers } from "./product.controller";
import validateRequest from "../../middleware/validateRequest";
import { productValidation } from "./product.validation";

const router = express.Router();

router.post("/create-product",validateRequest(productValidation.validateProducts), ProductControllers.createProduct);
router.get("/:id", ProductControllers.getProductById);
router.get("/:slug", ProductControllers.getProductBySlug);
router.get("/", ProductControllers.getAllProducts);
router.put("/:id", ProductControllers.updateProduct);
router.delete("/:id", ProductControllers.deleteProduct);
//-----------------------------------------------

export const ProductRoutes = router;
