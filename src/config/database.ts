import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// SOLID: Dependency Inversion Principle
// We're depending on abstractions (Sequelize interface) rather than concretions
const sequelize = new Sequelize(process.env.DATABASE_URL || "", {
  dialect: "postgres",
});

export default sequelize;
