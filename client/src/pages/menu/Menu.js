import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import styles from "../../styles/menu/menu.module.css"
import AnimatedPage from '../../components/context/AnimatedPage'
import * as BsIcons from 'react-icons/bs'
import * as GiIcons from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { listProduct } from '../../Redux/Actions/ProductActions'
import Loading from '../../components/messages/Loading'
import Error from '../../components/messages/Error'

function Menu() {

    const [search, setSearch] = useState("");

    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch])

    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart;

    return (
        <AnimatedPage>
            <div className={styles.mainContainer}>
                <div className={styles.heading}>
                    <h1>Our Menu</h1>
                    <div className={styles.links}>
                        <Link to='/cart'><GiIcons.GiShoppingBag /></Link>
                        <span>{cartItems.length}</span>
                    </div>
                </div>
                <div className={styles.search}>
                    <input
                        type='search'
                        placeholder='Search'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <BsIcons.BsSearch />
                </div>
                <div className={styles.menuContainer}>
                    {
                        loading ? (<Loading />) : error ? (<Error>Something went wrong</Error>)
                            :
                            (
                                <>
                                    {products.filter((item) => {
                                        if (search === "") {
                                            return item;
                                        }
                                        else if (item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                                            return item;
                                        }
                                    }).map((item, i) => {
                                        return (
                                            <motion.div
                                                className={styles.menuItems}
                                                key={item._id}
                                                initial={{
                                                    opacity: 0,
                                                    translateX: -35,
                                                    translateY: -35,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    translateX: 0,
                                                    translateY: 0
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    delay: i * 0.3
                                                }}
                                            >
                                                <Link to={`/menu/${item._id}`}>
                                                    <img src={item.image} alt='slika' />
                                                    <h1>{item.title}</h1>
                                                    <p>
                                                        €{item.price}
                                                    </p>
                                                </Link>
                                            </motion.div>
                                        )
                                    })}
                                </>
                            )
                    }
                </div>
            </div>
        </AnimatedPage>
    )
}

export default Menu
