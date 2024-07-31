import { Request, Response } from "express";
import { ProductController } from "../productController";
import { productService } from "../../services/productService";

// Mock the productService
jest.mock("../../services/productService");

describe("ProductController", () => {
  let productController: ProductController;
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    productController = new ProductController();
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  describe("createProduct", () => {
    it("should create a product and return 201 status", async () => {
      const mockProduct = { name: "Test Product", price: 10 };
      mockRequest.body = mockProduct;
      (productService.createProduct as jest.Mock).mockResolvedValue({
        id: 1,
        ...mockProduct,
      });

      await productController.createProduct(
        mockRequest as Request,
        mockResponse as Response
      );

      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith({ id: 1, ...mockProduct });
    });
  });
});
