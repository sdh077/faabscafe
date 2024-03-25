'use client'

import { createContext, useContext, useRef } from 'react'
import { motion, useReducedMotion, useScroll } from 'framer-motion'

const FadeInStaggerContext = createContext(false)

const viewport = { once: true, margin: '0px 0px -200px' }

export default function ZoomComponent(
    props: React.ComponentPropsWithoutRef<typeof motion.div>,
) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });
    const shouldReduceMotion = useReducedMotion()
    const isInStaggerGroup = useContext(FadeInStaggerContext)

    return (
        <>
            <section className='bg-black'>
                <div ref={ref}>
                    <figure className="progress">
                        <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                            <motion.circle
                                cx="50"
                                cy="50"
                                r="30"
                                pathLength="1"
                                className="indicator"
                                style={{ pathLength: scrollYProgress }}
                            />
                        </svg>
                    </figure>
                </div>
            </section>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
                    visible: { opacity: 1, y: 0 },
                }}
                style={{ pathLength: scrollYProgress }}
                transition={{ duration: 0.5 }}
                {...(isInStaggerGroup
                    ? {}
                    : {
                        initial: 'hidden',
                        whileInView: 'visible',
                        viewport,
                    })}
                {...props}
            />
        </>
    )
}

export function FadeInStagger({
    faster = false,
    ...props
}: React.ComponentPropsWithoutRef<typeof motion.div> & { faster?: boolean }) {
    return (
        <FadeInStaggerContext.Provider value={true}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ staggerChildren: faster ? 0.12 : 0.2 }}
                {...props}
            />
        </FadeInStaggerContext.Provider>
    )
}
