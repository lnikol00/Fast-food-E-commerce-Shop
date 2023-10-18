import React, { useEffect, useState } from 'react'
import styles from "../../../styles/user/user.module.css"
import AnimatedPage from '../../../components/context/AnimatedPage'
import * as BiIcons from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux"
import { getUserDetails } from '../../../Redux/Actions/UserAction'
import AccountDetails from './AccountDetails'
import Orders from './Orders'
import { listMyOrders } from '../../../Redux/Actions/OrderAction'

function User() {

    const [change, setChange] = useState(false)

    const dispatch = useDispatch();

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;
    const orderListMy = useSelector((state) => state.orderListMy);
    const { loading, error, orders } = orderListMy;

    useEffect(() => {
        dispatch(listMyOrders())
        dispatch(getUserDetails("profile"))
    }, [dispatch])

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <h1>My Account</h1>
                <div className={styles.infoContainer}>
                    <div className={styles.chategories}>
                        <div className={styles.chategoriesInfo}>
                            <div>
                                <BiIcons.BiSolidUserCircle />
                            </div>
                            <span>Hello,<br />{userInfo.name}</span>
                        </div>
                        <div className={styles.chategoriesOptions}>
                            <div className={change ? `${styles.Target}` : `${styles.notTarget}`}
                                onClick={() => setChange(true)}
                            >
                                My Orders
                            </div>
                            <div className={change ? `${styles.notTarget}` : `${styles.Target}`}
                                onClick={() => setChange(false)}
                            >
                                Account Details
                            </div>
                        </div>
                    </div>

                    <div className={styles.data}>
                        {change ?
                            <div className={styles.orders}>
                                <h1>My Orders</h1>
                                <Orders orders={orders} loading={loading} error={error} />
                            </div>
                            :
                            <div className={styles.details}>
                                <h1>Account Details</h1>
                                <AccountDetails />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default User
