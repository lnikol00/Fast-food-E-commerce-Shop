import React, { useEffect } from 'react'
import styles from "../../../styles/menu/shipping/placeorder.module.css"
import * as BiIcons from "react-icons/bi"
import * as ImIcons from "react-icons/im"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from 'react-router-dom'
import { getOrderDetails } from '../../../Redux/Actions/OrderAction'
import Error from '../../../components/messages/Error'
import Loading from '../../../components/messages/Loading'
import moment from "moment"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function OrderScreen() {

    const params = useParams();
    const orderId = params.id
    const dispatch = useDispatch();
    const orderDetails = useSelector((state) => state.orderDetails)
    const { order, loading, error } = orderDetails;

    useEffect(() => {
        dispatch(getOrderDetails(orderId))
    }, [dispatch, orderId])

    return (
        <div className={styles.mainContainer}>
            {
                loading ? (
                    <Loading />
                ) : error ? (
                    <Error>{error}</Error>
                ) : (
                    <>
                        <div className={styles.infoContainer}>
                            <div>
                                <div className={styles.icon}>
                                    <BiIcons.BiSolidUser />
                                </div>
                                <div className={styles.customer}>
                                    <h6>Customer</h6>
                                    <span>{order.user.name}<br />{order.user.email}</span>
                                </div>
                            </div>
                            <div >
                                <div className={styles.icon}>
                                    <BiIcons.BiSolidTruck />
                                </div>
                                <div className={styles.orderInfo}>
                                    <h6>Order info</h6>
                                    <span>Shipping: Croatia <br />Pyment method: {order.paymentMethod}</span>
                                    {order.isPaid ? (
                                        <div className={styles.messageContainer}>
                                            <p>Paid on {moment(order.paidAt).calendar()}</p>
                                        </div>
                                    ) : (
                                        <div className={`${styles.messageContainer} ${styles.danger}`}>
                                            <p>Not Paid</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div >
                                <div className={styles.icon}>
                                    <ImIcons.ImLocation />
                                </div>
                                <div className={styles.delivery}>
                                    <h6>Deliver to</h6>
                                    <span>Address: {order.shippingAddress.address}<br />{order.shippingAddress.city}, {order.shippingAddress.postalCode}</span>
                                    {order.isDelivered ? (
                                        <div className={styles.messageContainer}>
                                            <p>Delivered on {moment(order.deliveredAt).calendar()}</p>
                                        </div>
                                    ) : (
                                        <div className={`${styles.messageContainer} ${styles.danger}`}>
                                            <p>Not Delivered</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className={styles.orderContainer}>
                            <div className={styles.itemContainer}>
                                {order.orderItems.map((item) => (
                                    <div className={styles.order} key={item.product}>
                                        <div className={styles.title}>
                                            <img src={item.image} alt={item.title} />
                                            <h5>{item.title}</h5>
                                        </div>
                                        <div className={styles.quantity}>
                                            <span>Quantity</span>
                                            <div>
                                                {item.qty}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.price}>
                                <div className={styles.table}>
                                    <b>Total Price:</b>
                                    <span>€ {order.estimatedTotal}</span>
                                </div>
                                <PayPalScriptProvider options={{ clientId: "test" }}>
                                    <PayPalButtons/>
                                 </PayPalScriptProvider>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default OrderScreen
