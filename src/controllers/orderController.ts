import { Request, Response } from "express";
import { orderService } from "../services/orderService";
import Joi from "joi";
import { orderProcessingService } from "../services/orderProcessingService";

export class OrderController {
  private createOrderSchema = Joi.object({
    userId: Joi.number().positive().required(),
    total: Joi.number().positive().required(),
    status: Joi.string()
      .valid("pending", "processing", "completed", "cancelled")
      .default("pending"),
  });

  async createOrder(req: Request, res: Response) {
    try {
      const { error } = this.createOrderSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }

      const order = await orderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getAllOrders(req: Request, res: Response) {
    try {
      const orders = await orderService.getAllOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getOrderById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const order = await orderService.getOrderById(id);
      if (order) {
        res.json(order);
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async updateOrder(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const [affectedCount, affectedRows] = await orderService.updateOrder(
        id,
        req.body
      );
      if (affectedCount > 0) {
        res.json(affectedRows[0]);
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async deleteOrder(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const deletedCount = await orderService.deleteOrder(id);
      if (deletedCount > 0) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Order not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async processOrder(req: Request, res: Response) {
    try {
      const orderId = parseInt(req.params.id);
      const processedOrder = await orderProcessingService.processOrder(orderId);
      res.json(processedOrder);
    } catch (error) {
      res.status(500).json({ error: "Error processing order" });
    }
  }
}

// Design Pattern: Singleton
export const orderController = new OrderController();
