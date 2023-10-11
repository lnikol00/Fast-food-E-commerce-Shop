import Order from "../models/OrderModel.js";

// CREATE ORDERS
export const placeOrder = async (req, res) => {
    const { orderItems,
        shippingAddress,
        paymentMethod,
        estimatedTotal } = req.body;

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error("No order items")
        return
    }
    else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            estimatedTotal
        })

        const createOrder = await order.save()
        res.status(201).json(createOrder)
    }
}

// GET ORDER BY ID
export const getOrderById = async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    )

    if (order) {
        res.json(order)
    }
    else {
        res.status(404);
        throw new Error("Order Not Found")
    }
}