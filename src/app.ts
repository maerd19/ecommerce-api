import express, { Application, Request, Response, NextFunction } from "express";
import productRoutes from "./routes/productRoutes";
import orderRoutes from "./routes/orderRoutes";
import { authMiddleware } from "./middleware/auth";
import { loggingMiddleware } from "./middleware/logging";

// SOLID: Single Responsibility Principle
// This class is responsible for setting up and configuring the Express application
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.middleware();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private middleware(): void {
    this.app.use(loggingMiddleware);
    this.app.use("/api", authMiddleware);
  }

  private routes(): void {
    this.app.use("/api/products", productRoutes);
    this.app.use("/api/orders", orderRoutes);

    // 404 handler
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.status(404).json({ error: "Not Found" });
    });

    // Error handling middleware
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.status(500).send("Something went wrong");
      }
    );
  }
}

export default new App().app;
