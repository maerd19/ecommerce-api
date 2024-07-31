import { Request, Response, NextFunction } from "express";

// SOLID: Single Responsibility Principle
// This middleware is responsible for logging
export function loggingMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
}
