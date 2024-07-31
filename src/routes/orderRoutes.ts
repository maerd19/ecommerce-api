import { Router } from "express";
import { orderController } from "../controllers/orderController";

const router = Router();

// SOLID: Interface Segregation Principle
// Each route is responsible for a single operation
router.post("/", orderController.createOrder.bind(orderController));
router.get("/", orderController.getAllOrders.bind(orderController));
router.get("/:id", orderController.getOrderById.bind(orderController));
router.put("/:id", orderController.updateOrder.bind(orderController));
router.delete("/:id", orderController.deleteOrder.bind(orderController));

export default router;
