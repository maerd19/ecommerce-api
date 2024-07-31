import Product from "../models/product";

// SOLID: Single Responsibility Principle
// This service is responsible for handling all business logic related to products
export class ProductService {
  // SOLID: Open/Closed Principle
  // New product types can be added without modifying existing code
  async createProduct(productData: Partial<Product>): Promise<Product> {
    return await Product.create(productData);
  }

  async getAllProducts(): Promise<Product[]> {
    return await Product.findAll();
  }

  async getProductById(id: number): Promise<Product | null> {
    return await Product.findByPk(id);
  }

  async updateProduct(
    id: number,
    productData: Partial<Product>
  ): Promise<[number, Product[]]> {
    const [affectedCount, affectedRows] = await Product.update(productData, {
      where: { id },
      returning: true,
    });
    return [affectedCount, affectedRows];
  }

  async deleteProduct(id: number): Promise<number> {
    return await Product.destroy({ where: { id } });
  }
}

// Design Pattern: Singleton
// Ensures only one instance of ProductService is created
export const productService = new ProductService();
