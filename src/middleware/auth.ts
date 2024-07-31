import { Request, Response, NextFunction } from "express";

// SOLID: Single Responsibility Principle
// This middleware is responsible for authentication
export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    // Verify the token here
    next();
  } else {
    res.status(401).json({ error: "Unauthorized" });
  }
}
