'use client'
import { motion, useScroll } from "framer-motion"

export default function TransitionComponent({ children }: { children: React.ReactNode }) {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
        // animate={{ rotate: 180 }}
        // transition={{ type: 'spring' }}
        >
            {children}
        </motion.div>
    )
}