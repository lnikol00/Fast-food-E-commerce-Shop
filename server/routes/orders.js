import express from "express"
import asyncHandler from "express-async-handler"
import * as orderController from "../controllers/orderController.js";
import protect from "../middleware/AuthMiddleware.js";

const orderRoute = express.Router();

orderRoute.route('/')
    .post(protect, asyncHandler(orderController.placeOrder))
    .get(protect, asyncHandler(orderController.userLoginOrders));

orderRoute.get("/:id", protect, asyncHandler(orderController.getOrderById));

orderRoute.put("/:id/pay", protect, asyncHandler(orderController.payOrder));

export default orderRoute;