import { Sequelize } from "sequelize";

// SOLID: Dependency Inversion Principle
// We're depending on abstractions (Sequelize interface) rather than concretions
const sequelize = new Sequelize(
  "postgres://username:password@localhost:5432/ecommerce_db",
  {
    dialect: "postgres",
  }
);

export default sequelize;
