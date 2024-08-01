import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// SOLID: Dependency Inversion Principle
// We're depending on abstractions (Sequelize interface) rather than concretions
// const sequelize = new Sequelize(process.env.DATABASE_URL || "", {
//   dialect: "postgres",
// });
const sequelize = new Sequelize(
  process.env.DB_NAME || "ecommerce_db",
  process.env.DB_USER || "user",
  process.env.DB_PASSWORD || "password",
  {
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT || "5432"),
    dialect: "postgres",
  }
);

export default sequelize;
