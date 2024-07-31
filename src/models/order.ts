import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

// SOLID: Single Responsibility Principle
// This model is responsible only for defining the Order entity
class Order extends Model {
  public id!: number;
  public userId!: number;
  public total!: number;
  public status!: string;
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "pending",
    },
  },
  {
    sequelize,
    modelName: "Order",
  }
);

export default Order;
