import { Request, Response } from "express";
import { productService } from "../services/productService";
import Joi from "joi";

// SOLID: Single Responsibility Principle
// This controller is responsible for handling HTTP requests related to products
export class ProductController {
  // Input validation schema
  private createProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().positive().required(),
    description: Joi.string().optional(),
  });

  async createProduct(req: Request, res: Response) {
    try {
      // Input validation
      const { error } = this.createProductSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getAllProducts(req: Request, res: Response) {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getProductById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const product = await productService.getProductById(id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateProduct(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const [affectedCount, affectedRows] = await productService.updateProduct(
        id,
        req.body
      );
      if (affectedCount > 0) {
        res.json(affectedRows[0]);
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteProduct(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const deletedCount = await productService.deleteProduct(id);
      if (deletedCount > 0) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Product not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

// Design Pattern: Singleton
// Ensures only one instance of productController is created
export const productController = new ProductController();
