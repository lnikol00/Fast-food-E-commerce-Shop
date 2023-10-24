import React from 'react'
import { motion } from 'framer-motion'
import logoImage from '../../images/logo.png'
import "../../App.css"

const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
}

function AnimatedPage({ children }) {
    return (
        <>
            <div>
                {children}
            </div>
            <motion.div
                className='slide-in'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <img alt='logo' src={logoImage} />
            </motion.div>
            <motion.div
                className='slide-out'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
                <img alt='logo' src={logoImage} />
            </motion.div>

        </>

    )
}

export default AnimatedPage
