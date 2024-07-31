import Order from "../models/order";
import Product from "../models/product";
import { Transaction } from "sequelize";
import sequelize from "../config/database";

// SOLID: Single Responsibility Principle
// This service is responsible for processing orders
export class OrderProcessingService {
  async processOrder(orderId: number): Promise<Order> {
    // Use a transaction to ensure data consistency
    const transaction: Transaction = await sequelize.transaction();

    try {
      const order = await Order.findByPk(orderId, { transaction });
      if (!order) {
        throw new Error("Order not found");
      }

      // Implement order processing logic here
      // For example, check inventory, calculate total, etc.
      await this.checkInventory(order, transaction);
      await this.calculateTotal(order, transaction);

      order.status = "processing";
      await order.save({ transaction });

      await transaction.commit();
      return order;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  private async checkInventory(
    order: Order,
    transaction: Transaction
  ): Promise<void> {
    // Implement inventory check logic
    // This is a placeholder implementation
    console.log("Checking inventory for order:", order.id);
  }

  private async calculateTotal(
    order: Order,
    transaction: Transaction
  ): Promise<void> {
    // Implement total calculation logic
    // This is a placeholder implementation
    console.log("Calculating total for order:", order.id);
  }
}

// Design Pattern: Singleton
export const orderProcessingService = new OrderProcessingService();
