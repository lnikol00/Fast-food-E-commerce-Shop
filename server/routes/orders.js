import express from "express"
import asyncHandler from "express-async-handler"
import * as orderController from "../controllers/orderController.js";
import protect from "../middleware/AuthMiddleware.js";

const orderRoute = express.Router();

orderRoute.post("/", protect, asyncHandler(orderController.placeOrder));

orderRoute.get("/:id", protect, asyncHandler(orderController.getOrderById));

export default orderRoute;