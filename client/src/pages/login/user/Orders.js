import React from 'react'
import styles from "../../../styles/user/order.module.css"
import AnimatedPage from '../../../components/context/AnimatedPage';
import Loading from '../../../components/messages/Loading';
import Error from '../../../components/messages/Error';
import { Link } from 'react-router-dom';
import moment from "moment"

function Orders(props) {

    const { loading, error, orders } = props;

    return (
        <AnimatedPage>
            <>
                {loading ? (
                    <Loading />
                ) : error ? (
                    <Error>{error}</Error>
                ) : (
                    <>
                        {
                            orders.length === 0 ? (
                                <div className={styles.emptyContainer}>
                                    No Orders
                                    <Link to="">
                                        START SHOPPING
                                    </Link>
                                </div>
                            ) : (
                                <div className={styles.mainContainer}>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th width="25%">ID:</th>
                                                <th width="10%">STATUS:</th>
                                                <th>DATE:</th>
                                                <th>TOTAL:</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {orders.map((order) => (
                                                <tr className={order.isPaid ? `${styles.success}` : `${styles.danger}`} key={order._id}>
                                                    <td>
                                                        <Link to={`/order/${order._id}`}>
                                                            {order._id}
                                                        </Link>
                                                    </td>
                                                    <td>{order.isPaid ? <>Paid</> : <>Not Paid</>}</td>
                                                    <td >
                                                        {order.isPaid
                                                            ? moment(order.paidAt).calendar()
                                                            : moment(order.createdAt).calendar()
                                                        }
                                                    </td>
                                                    <td>
                                                        € {order.estimatedTotal}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )
                        }
                    </>
                )
                }
            </>
        </AnimatedPage>
    )
}

export default Orders
