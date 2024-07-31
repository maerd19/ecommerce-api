import sequelize from "./database";
import Product from "../models/product";
import Order from "../models/order";

// SOLID: Single Responsibility Principle
// This module is responsible for database synchronization
export async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    // Sync all models
    await Product.sync();
    await Order.sync();

    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to sync database:", error);
  }
}
