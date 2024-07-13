import express, { Request, Response } from "express";
import cors from "cors";
import { ProductRoutes } from "./modules/product/product.route";

const app = express();

//parsers
app.use(cors());
app.use(express.json());

app.use("/api/products", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Campers shop server.....");
});

export default app;
