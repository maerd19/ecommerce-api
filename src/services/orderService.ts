import Order from "../models/order";

// SOLID: Single Responsibility Principle
// This service is responsible for handling all business logic related to orders
export class OrderService {
  async createOrder(orderData: Partial<Order>): Promise<Order> {
    return await Order.create(orderData);
  }

  async getAllOrders(): Promise<Order[]> {
    return await Order.findAll();
  }

  async getOrderById(id: number): Promise<Order | null> {
    return await Order.findByPk(id);
  }

  async updateOrder(
    id: number,
    orderData: Partial<Order>
  ): Promise<[number, Order[]]> {
    const [affectedCount, affectedRows] = await Order.update(orderData, {
      where: { id },
      returning: true,
    });
    return [affectedCount, affectedRows];
  }

  async deleteOrder(id: number): Promise<number> {
    return await Order.destroy({ where: { id } });
  }
}

// Design Pattern: Singleton
// Ensures only one instance of orderService is created
export const orderService = new OrderService();
