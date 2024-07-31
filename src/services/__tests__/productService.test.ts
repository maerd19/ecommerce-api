import { ProductService } from "../productService";
import Product from "../../models/product";

// Mock the Product model
jest.mock("../../models/product");

describe("ProductService", () => {
  let productService: ProductService;

  beforeEach(() => {
    productService = new ProductService();
  });

  describe("createProduct", () => {
    it("should create a product", async () => {
      const mockProduct = { id: 1, name: "Test Product", price: 10 };
      (Product.create as jest.Mock).mockResolvedValue(mockProduct);

      const result = await productService.createProduct(mockProduct);

      expect(result).toEqual(mockProduct);
      expect(Product.create).toHaveBeenCalledWith(mockProduct);
    });
  });
});
