import express, { Application, Request, Response, NextFunction } from "express";

// SOLID: Single Responsibility Principle
// This class is responsible for setting up and configuring the Express application
class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Hello World!");
    });

    // Error handling middleware
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.error(err.stack);
        res.status(500).send("Something broke!");
      }
    );
  }
}

export default new App().app;
